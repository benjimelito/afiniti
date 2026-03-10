import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button2 Variants
 * Extracted from: https://www.afiniti.com, https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 12x
 */
export const button2Variants = cva(
  // Base styles observed
  "e-n-menu-dropdown-icon e-focus",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Button2Variants = VariantProps<typeof button2Variants>;
