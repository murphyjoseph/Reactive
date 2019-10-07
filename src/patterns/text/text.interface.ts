import { IStylesColor, IStylesSpacing } from '../../interfaces/styles.interface';
import { IText } from '../../interfaces/text.interface';
import { IPattern } from '../../interfaces/pattern.interface';
import { IEvent } from '../../interfaces/event.interface';

type ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "a" | "figcaption";

export interface IText extends IPattern, IText, IStylesColor, IEvent {
  kind?: ElementType,
  margin?: IStylesSpacing,
  padding?: IStylesSpacing,
  condition?: boolean,
  title?: string,
  linkify?: boolean,
  preset?: "initial" | "headingone" | "headingtwo" | "headingthree" | "copy" | "copyTitle" | "description" | "label" | "sublabel" | "navLink" | "tag"
}