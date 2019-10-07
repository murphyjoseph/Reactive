import { IPattern } from '../../interfaces/pattern.interface';
import { ILink } from '../../interfaces/link.interface';
import { IEvent } from '../../interfaces/event.interface';
import { IStylesColorSvg, IStylesTextAlign, IStylesDisplay, IStylesSpacing } from '../../interfaces/styles.interface';
import { TSizeLabels } from '../../types/util-types';

import { TIconNames } from './icon.enum';

export interface IIcon extends IPattern, ILink, IEvent, IStylesColorSvg, IStylesTextAlign, IStylesDisplay {
  padding?: IStylesSpacing,
  margin?: IStylesSpacing,
  size?: TSizeLabels,
  preset?: "main",
  name?: TIconNames
}
