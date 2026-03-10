import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card3 Variants
 * Extracted from: https://www.afiniti.com
 * Usage count: 1x
 */
export const card3Variants = cva(
  // Base styles observed
  "elementor-element elementor-element-f2fe519 elementor-widget elementor-widget-card_new",
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

export type Card3Variants = VariantProps<typeof card3Variants>;
