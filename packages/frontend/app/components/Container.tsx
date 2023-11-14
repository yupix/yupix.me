import { ReactNode } from "react";
import { cn } from "~/utils/misc";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return <div className={cn("container", className)}>{children}</div>;
}
