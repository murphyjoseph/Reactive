import { IPattern } from "../../interfaces/pattern.interface";
import { IImageSource } from "../../interfaces/imageSource.interface";
import { IText } from "../text/text.interface";
import { IStylesRounded } from "../../interfaces/styles.interface";

export interface IImg extends IPattern, IStylesRounded {
  imgSettings: IImageSource[],
  preset?: "main" | "avatar",
  alt?: string,
  isFigure?: boolean,
  textBindings?: IText
}