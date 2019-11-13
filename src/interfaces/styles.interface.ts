import { TBreakpoints,
         TColors,
         TSizeLabels,
         TPositionLabels,
         TDirectionLabels,
         TAlignmentText,
         TBranding,
         TPositionTypes,
         TSpacingDirections,
         TDisplaySettings } from '../types/util-types';

export interface IStylesGrid {
  container: "",
  colType: "",
  colValue: ""
}

export interface IStylesBrand {
  brand?: TBranding
}

export interface IStylesRounded {
  isRounded?: boolean,
  isRoundedHalf?: boolean,
  isRoundedFull?: boolean
}

export interface IStylesColor {
  colorText?: TColors,
  colorBackground?: TColors
}

export interface IStylesBorder {
  color?: TColors,
  size?: TSizeLabels,
  direction?: TSpacingDirections
}

export interface IStylesColorSvg {
  colorFill?: TColors,
  colorStroke?: TColors
}

export interface IStylesSpacing extends IStylesBreakpoint {
  size?: TSizeLabels,
  direction?: TSpacingDirections
}

export interface IStylesTextAlign {
  textAlignment?: TAlignmentText
}

export interface IStylesDisplay {
  display?: TDisplaySettings
}

export interface IStylesShadow {
  size?: TSizeLabels,
  direction?: TDirectionLabels
}

export interface IStylesMaxWidth extends IStylesBreakpoint {
  size?: TSizeLabels
}

export interface IStylesOverflow {
  direction: "x" | "y" | "all"
  type: "hidden" | "auto" | "scroll" | "visible"
}

export interface IStylesText extends IStylesTextAlign, IStylesDisplay {
  characterWidth?: TPositionLabels,
  isTiny?: boolean,
  isBig?: boolean,
  isNowrap?: boolean,
  isBold?: boolean,
  isThin?: boolean,
  isItalic?: boolean,
  isUnderlined?: boolean,
  isCrossedOut?: boolean,
  wordBreak?: "all" | "word",
  whiteSpace?: "pre"| "preLine",
  textTransform?: "uppercase" | "capitalize"
}

export interface IStylesPosition {
  direction?: TPositionLabels,
  type?: TPositionTypes
}

export interface IStylesBreakpoint {
  breakpointName?: TBreakpoints,
  breakpointDirection?: "over" | "under"
}