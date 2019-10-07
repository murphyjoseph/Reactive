import { IPattern } from '../../interfaces/pattern.interface';
import { ILink } from '../../interfaces/link.interface';
import { IEvent } from '../../interfaces/event.interface';
import { IStylesColor, IStylesSpacing, IStylesBorder, IStylesPosition, IStylesRounded, IStylesShadow, IStylesDisplay, IStylesTextAlign, IStylesOverflow, IStylesMaxWidth } from '../../interfaces/styles.interface';
import { TSizeLabels } from '../../types/util-types';

export interface IContainer extends IPattern, IStylesColor, ILink, IStylesRounded, IStylesDisplay, IStylesTextAlign, IEvent {
  border?: IStylesBorder,
  padding?: IStylesSpacing | IStylesSpacing[],
  margin?: IStylesSpacing,
  position?: IStylesPosition,
  shadow?: IStylesShadow,
  preset?: "initial" | "card" | "section",
  minHeight?: TSizeLabels,
  maxHeight?: TSizeLabels,
  maxWidth?: IStylesMaxWidth | IStylesMaxWidth[],
  overflow?: IStylesOverflow
}