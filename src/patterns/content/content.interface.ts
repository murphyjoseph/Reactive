import { IBtn } from '../btn/btn.interface';
import { IText } from '../text/text.interface';
import { IContainer } from '../container/container.interface';
import { IPattern } from '../../interfaces/pattern.interface';

export interface IContent extends IPattern {
  textBindings?: IText[],
  btnBindings?: IBtn[],
  containerBindings?: IContainer,
  preset?: "initial"
}