import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav2 Variants
 * Extracted from: https://www.afiniti.com, https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 6x
 */
export const nav2Variants = cva(
  // Base styles observed
  "elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none",
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

export type Nav2Variants = VariantProps<typeof nav2Variants>;
