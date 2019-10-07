import { IStylesSpacing, IStylesBorder } from '../../interfaces/styles.interface';
import { IPattern } from '../../interfaces/pattern.interface';

export interface IDivider extends IPattern {
  preset?: "initial",
  margin?: IStylesSpacing,
  padding?: IStylesSpacing,
  border?: IStylesBorder
 }