import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const CONTAINER_CLASS = "mx-auto max-w-[1600px] px-6 md:px-10";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn(CONTAINER_CLASS, className)}>{children}</div>;
}
