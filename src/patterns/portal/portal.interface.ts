import { IPattern } from '../../interfaces/pattern.interface';

export interface IPortal extends IPattern {
  isBlurred?: boolean,
  preset?: "initial"
}