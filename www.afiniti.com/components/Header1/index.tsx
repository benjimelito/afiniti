import * as React from "react";
import { cn } from "@/lib/utils";
import { header1Variants, type Header1Variants } from "./variants";

/**
 * Header1
 * 
 * Extracted from source site.
 * Original structure:
 * <header data-elementor-type="header" data-elementor-id="20853" class="elementor elementor-20853 elementor-location-header" data-elementor-post-type="elementor_library"><div class="elementor-element el
 * 
 * Observed on: https://www.afiniti.com
 * Usage count: 1x
 */
export interface Header1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header1Variants {}

export const Header1 = React.forwardRef<HTMLDivElement, Header1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header1.displayName = "Header1";
