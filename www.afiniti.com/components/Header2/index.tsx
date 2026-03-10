import * as React from "react";
import { cn } from "@/lib/utils";
import { header2Variants, type Header2Variants } from "./variants";

/**
 * Header2
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="elementor-section elementor-top-section elementor-element elementor-element-4a0f1e4b elementor-section-full_width elementor-section-stretched header inner-header elementor-section-heigh
 * 
 * Observed on: https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction
 * Usage count: 3x
 */
export interface Header2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header2Variants {}

export const Header2 = React.forwardRef<HTMLDivElement, Header2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header2.displayName = "Header2";
