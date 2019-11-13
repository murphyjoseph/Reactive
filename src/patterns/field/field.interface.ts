import { IPattern } from '../../interfaces/pattern.interface';
import { IText } from '../text/text.interface';
import { IState } from '../../interfaces/state.interface';
import { IOption } from '../../interfaces/option.interface';
import { TSizeLabels } from '../../types/util-types';
import { IStylesSpacing } from '../../interfaces/styles.interface';

type TKinds = "submit" | "range" | "reset" | "text" | "tel" | "email" | "password" | "date" | "select" | "checkbox" | "radio" | "textarea" | "file" | "number" | "zipcode" | "hidden";

export interface IField extends IPattern, IState {
  kind?: TKinds,
  preset?: "initial" | TKinds,
  isBottomSpaced?: boolean,
  onChange?: Function,
  onFocus?: Function,
  readonly?: boolean,
  isRequired?: boolean,
  isFull?: boolean,
  name?: string,
  form?: string,
  maxLength?: number,
  max?: number,
  placeholder?: string,
  options?: any[], //string[] | IOption[];
  addEmptyOption?: boolean,
  value?: any,
  defaultValue?: any,
  checked?: boolean,
  labelPosition?: "top" | "left" | "right",
  labelTextBindings?: IText,
  sublabelTextBindings?: IText,
  errorTextBindings?: IText,
  isThin?: boolean,
  inputmode?: string,
  pattern?: string,
  maxHeight?: TSizeLabels,
  maxWidth?: TSizeLabels,
  minHeight?: TSizeLabels,
  minWidth?: TSizeLabels,
  validation?: () => {[key: string]: any},
  padding?: IStylesSpacing,
  margin?: IStylesSpacing
}
