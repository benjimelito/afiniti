import * as React from "react";
import { cn } from "@/lib/utils";
import { nav2Variants, type Nav2Variants } from "./variants";

/**
 * Nav2
 * 
 * Extracted from source site.
 * Original structure:
 * <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-c72d47" class="elementor-nav-menu" data-smart
 * 
 * Observed on: https://www.afiniti.com, https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 6x
 */
export interface Nav2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav2Variants {}

export const Nav2 = React.forwardRef<HTMLDivElement, Nav2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav2.displayName = "Nav2";
