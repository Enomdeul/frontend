/**
 * Typography Design System
 * Based on Figma design system
 *
 * Usage:
 * import { textStyles } from '@/lib/typography'
 *
 * <h1 className={textStyles.h1}>Heading 1</h1>
 * <p className={textStyles.body1.regular}>Body text</p>
 */

export const textStyles = {
  // Headlines
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",

  // Subtitle
  subtitle: {
    bold: "text-subtitle-bold",
    semibold: "text-subtitle-semibold",
  },

  // Body 1
  body1: {
    bold: "text-body1-bold",
    semibold: "text-body1-semibold",
    medium: "text-body1-medium",
    regular: "text-body1-regular",
  },

  // Body 2
  body2: {
    bold: "text-body2-bold",
    semibold: "text-body2-semibold",
    medium: "text-body2-medium",
    regular: "text-body2-regular",
  },

  // Button
  button: {
    button1: "text-button1",
    button2: "text-button2",
  },

  // Caption
  caption: {
    semibold: "text-caption-semibold",
    medium: "text-caption-medium",
    regular: "text-caption-regular",
  },
} as const;

/**
 * Typography variant types for type safety
 */
export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "subtitle-bold"
  | "subtitle-semibold"
  | "body1-bold"
  | "body1-semibold"
  | "body1-medium"
  | "body1-regular"
  | "body2-bold"
  | "body2-semibold"
  | "body2-medium"
  | "body2-regular"
  | "button1"
  | "button2"
  | "caption-semibold"
  | "caption-medium"
  | "caption-regular";

/**
 * Get text style class by variant
 */
export function getTextStyle(variant: TextVariant): string {
  const styleMap: Record<TextVariant, string> = {
    h1: textStyles.h1,
    h2: textStyles.h2,
    h3: textStyles.h3,
    "subtitle-bold": textStyles.subtitle.bold,
    "subtitle-semibold": textStyles.subtitle.semibold,
    "body1-bold": textStyles.body1.bold,
    "body1-semibold": textStyles.body1.semibold,
    "body1-medium": textStyles.body1.medium,
    "body1-regular": textStyles.body1.regular,
    "body2-bold": textStyles.body2.bold,
    "body2-semibold": textStyles.body2.semibold,
    "body2-medium": textStyles.body2.medium,
    "body2-regular": textStyles.body2.regular,
    button1: textStyles.button.button1,
    button2: textStyles.button.button2,
    "caption-semibold": textStyles.caption.semibold,
    "caption-medium": textStyles.caption.medium,
    "caption-regular": textStyles.caption.regular,
  };

  return styleMap[variant];
}
