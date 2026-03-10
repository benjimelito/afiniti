import * as React from "react";
import { cn } from "@/lib/utils";
import { button1Variants, type Button1Variants } from "./variants";

/**
 * Button1
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="e-n-menu-toggle" id="menu-toggle-199" aria-haspopup="true" aria-expanded="false" aria-controls="menubar-199" aria-label="Menu Toggle"> <span class="e-n-menu-toggle-icon e-open"> <svg xm
 * 
 * Observed on: https://www.afiniti.com, https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 6x
 */
export interface Button1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button1Variants {}

export const Button1 = React.forwardRef<HTMLDivElement, Button1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button1.displayName = "Button1";
