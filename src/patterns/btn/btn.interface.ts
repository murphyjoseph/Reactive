import { IStylesColor, IStylesSpacing } from "../../interfaces/styles.interface";
import { IStylesBreakpoint } from "../../interfaces/styles.interface";
import { IText } from "../../interfaces/text.interface";
import { IPattern } from "../../interfaces/pattern.interface";
import { IState } from "../../interfaces/state.interface";
import { IEvent } from "../../interfaces/event.interface";
import { IStylesRounded } from '../../interfaces/styles.interface';

type TKinds = "reset" | "submit" | "button" | "link";

export interface IBtn extends IPattern, IText, IState, IEvent, IStylesBreakpoint, IStylesRounded {
  kind?: TKinds,
  isStandard?: boolean,
  isFull?: boolean,
  isCentered?: boolean,
  isSkinny?: boolean,
  margin?: IStylesSpacing,
  preset?: "initial" | "full",
  brand?: "global" | "globalOutline" | "primary" | "primaryOutline" | "secondary" | "secondaryOutline" | "warning" | "success" | "disabled" | "simple" | "neutral"
}