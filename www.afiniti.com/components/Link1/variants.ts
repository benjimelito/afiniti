import { cva, type VariantProps } from "class-variance-authority";

/**
 * Link1 Variants
 * Extracted from: https://www.afiniti.com/about-us
 * Usage count: 3x
 */
export const link1Variants = cva(
  // Base styles observed
  "card-btn",
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

export type Link1Variants = VariantProps<typeof link1Variants>;
