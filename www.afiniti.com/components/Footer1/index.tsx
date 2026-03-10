import * as React from "react";
import { cn } from "@/lib/utils";
import { footer1Variants, type Footer1Variants } from "./variants";

/**
 * Footer1
 * 
 * Extracted from source site.
 * Original structure:
 * <footer data-elementor-type="footer" data-elementor-id="263" class="elementor elementor-263 elementor-location-footer" data-elementor-post-type="elementor_library"><footer class="elementor-section ele
 * 
 * Observed on: https://www.afiniti.com, https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 6x
 */
export interface Footer1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Footer1Variants {}

export const Footer1 = React.forwardRef<HTMLDivElement, Footer1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(footer1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Footer1.displayName = "Footer1";
