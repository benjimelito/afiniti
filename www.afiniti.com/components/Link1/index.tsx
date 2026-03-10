import * as React from "react";
import { cn } from "@/lib/utils";
import { link1Variants, type Link1Variants } from "./variants";

/**
 * Link1
 * 
 * Extracted from source site.
 * Original structure:
 * <a class="card-btn" target="_blank" href="https://www.linkedin.com/in/jeromekapelus/"> <img decoding="async" class="lazyload btn-img" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/s
 * 
 * Observed on: https://www.afiniti.com/about-us
 * Usage count: 3x
 */
export interface Link1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Link1Variants {}

export const Link1 = React.forwardRef<HTMLDivElement, Link1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(link1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Link1.displayName = "Link1";
