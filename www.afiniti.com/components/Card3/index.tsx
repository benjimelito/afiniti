import * as React from "react";
import { cn } from "@/lib/utils";
import { card3Variants, type Card3Variants } from "./variants";

/**
 * Card3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="elementor-element elementor-element-f2fe519 elementor-widget elementor-widget-card_new" data-id="f2fe519" data-element_type="widget" data-widget_type="card_new.default"><div class="element
 * 
 * Observed on: https://www.afiniti.com
 * Usage count: 1x
 */
export interface Card3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card3Variants {}

export const Card3 = React.forwardRef<HTMLDivElement, Card3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card3.displayName = "Card3";
