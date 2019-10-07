import { IText } from '../text/text.interface';
import { IPattern } from '../../interfaces/pattern.interface';
import { IStylesDisplay, IStylesTextAlign, IStylesSpacing } from '../../interfaces/styles.interface';

export interface IParagraph extends IPattern, IStylesDisplay, IStylesTextAlign {
  textBindings?: IText[],
  margin?: IStylesSpacing,
  preset?: "main"
}