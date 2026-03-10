import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header2 Variants
 * Extracted from: https://www.afiniti.com/about-us, https://www.afiniti.com/job/, https://www.afiniti.com/afiniti-successfully-completes-recapitalization-transaction
 * Usage count: 3x
 */
export const header2Variants = cva(
  // Base styles observed
  "elementor-section elementor-top-section elementor-element elementor-element-4a0f1e4b elementor-section-full_width elementor-section-stretched header inner-header elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky__spacer",
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

export type Header2Variants = VariantProps<typeof header2Variants>;
