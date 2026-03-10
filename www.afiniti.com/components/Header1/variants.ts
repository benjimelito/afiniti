import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header1 Variants
 * Extracted from: https://www.afiniti.com
 * Usage count: 1x
 */
export const header1Variants = cva(
  // Base styles observed
  "elementor elementor-20853 elementor-location-header",
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

export type Header1Variants = VariantProps<typeof header1Variants>;
