import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav3 Variants
 * Extracted from: https://www.afiniti.com, https://www.afiniti.com/afinitis-ai-pairing-solution-is-now-available-on-nice-cxexchange, https://www.afiniti.com/responsible-ai/how-it-works
 * Usage count: 3x
 */
export const nav3Variants = cva(
  // Base styles observed
  "elementor-nav-menu--dropdown elementor-nav-menu__container",
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

export type Nav3Variants = VariantProps<typeof nav3Variants>;
