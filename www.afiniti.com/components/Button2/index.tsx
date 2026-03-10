import * as React from "react";
import { cn } from "@/lib/utils";
import { button2Variants, type Button2Variants } from "./variants";

/**
 * Button2
 * 
 * Extracted from source site.
 * Original structure:
 * <button id="e-n-menu-dropdown-icon-1993" class="e-n-menu-dropdown-icon e-focus" data-tab-index="3" aria-haspopup="true" aria-expanded="false" aria-controls="e-n-menu-content-1993" data-focus-index="3"
 * 
 * Observed on: https://www.afiniti.com, https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 12x
 */
export interface Button2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button2Variants {}

export const Button2 = React.forwardRef<HTMLDivElement, Button2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button2.displayName = "Button2";
