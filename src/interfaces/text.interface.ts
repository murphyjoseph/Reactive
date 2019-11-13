import { ILink } from './link.interface';
import { IStylesColor,
         IStylesText } from './styles.interface';

export interface IText extends IStylesColor, IStylesText, ILink {
  text?: string
}

// text?: string,
// colorText?: TColors,
// colorBackground?: TColors
// characterWidth?: TPositionLabels,
// isTiny?: boolean,
// isBig?: boolean,
// isNowrap?: boolean,
// isBold?: boolean,
// isThin?: boolean,
// isItalic?: boolean,
// isUnderlined?: boolean,
// isCrossedOut?: boolean,
// wordBreak?: "all" | "word",
// whiteSpace?: "pre"| "preLine",
// textTransform?: "uppercase" | "capitalize"
// href?: string,
// target?: "_self" | "_blank"