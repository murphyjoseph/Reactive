import { IPattern } from "../../interfaces/pattern.interface";
import { IIcon } from "../icon/icon.interface";
import { IText } from '../text/text.interface';
import { IContainer } from "../container/container.interface";
import { IImg } from "../img/img.interface";

export interface IMediaFlag extends IPattern {
  containerBindings?: IContainer,
  iconBindings?: IIcon,
  imgBindings?: IImg,
  textBindings?: IText[],
  preset?: "main"
}