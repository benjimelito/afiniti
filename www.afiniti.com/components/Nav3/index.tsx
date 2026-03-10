import * as React from "react";
import { cn } from "@/lib/utils";
import { nav3Variants, type Nav3Variants } from "./variants";

/**
 * Nav3
 * 
 * Extracted from source site.
 * Original structure:
 * <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true"><ul id="menu-2-c72d47" class="elementor-nav-menu" data-smartmenus-id="17731026546076692"><li class="menu-item
 * 
 * Observed on: https://www.afiniti.com, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 3x
 */
export interface Nav3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav3Variants {}

export const Nav3 = React.forwardRef<HTMLDivElement, Nav3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav3.displayName = "Nav3";
