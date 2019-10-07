import { IPattern } from '../../interfaces/pattern.interface';

export interface IProgressbar extends IPattern {
  value?: number,
  max?: number,
  preset?: "main"
}