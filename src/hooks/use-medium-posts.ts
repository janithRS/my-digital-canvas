import { useEffect, useState } from "react";
import { MEDIUM_FEED_URL } from "@/data/config";

export type BlogPost = { title: string; link: string; pubDate: string; excerpt: string };

type Rss2JsonItem = { title: string; link: string; pubDate: string; description?: string };
type Rss2JsonResponse = { status: string; items?: Rss2JsonItem[] };

export function useMediumPosts(limit = 3) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED_URL)}`)
      .then((res) => res.json())
      .then((data: Rss2JsonResponse) => {
        if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error("Feed unavailable");
        setPosts(
          data.items.slice(0, limit).map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            excerpt: String(item.description ?? "")
              .replace(/<[^>]+>/g, "")
              .trim()
              .slice(0, 140),
          })),
        );
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, [limit]);

  return { posts, status };
}
