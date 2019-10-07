import { IPattern } from "../../interfaces/pattern.interface";
import { IMediaFlag } from '../media-flag/media-flag.interface';

export interface ITab {
  slotContent?: JSX.Element,
  isActive?: boolean,
  mediaFlagBindings?: IMediaFlag
}

export interface ITabs extends IPattern {
  tabs?: ITab[],
  preset?: "main"
}