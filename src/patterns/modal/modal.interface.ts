import { IContainer } from '../container/container.interface';
import { IPattern } from '../../interfaces/pattern.interface';
import { IEvent } from '../../interfaces/event.interface';
import { IToggle } from '../../interfaces/toggle.interface';
import { IBtn } from '../btn/btn.interface';
import { TSizeLabels } from '../../types/util-types';

export interface IModal extends IPattern, IEvent, IToggle {
  preset?: any,
  open?: boolean,
  label?: string,
  setOpen?: (open: boolean) => void,
  onRequestClose?: () => void,
  contentWrapper?: {
    containerBindings?: IContainer,
    mode?: {
      fullScreen?: {
        isOnAlways?: boolean
      };
      flex?: {
        height: TSizeLabels | "dynamic",
        width: TSizeLabels
      };
    };
  };
  contentBar?: {
    slot?: JSX.Element | React.ReactNode,
    containerBindings?: IContainer,
    onIconCloseClick?: () => void,
    isIconCloseDisplayed?: boolean
  };
  contentArea?: {
    slot?: JSX.Element | React.ReactNode,
    containerBindings?: IContainer,
    btnBindings?: IBtn
  };
  trigger?: {
    slot?: JSX.Element | React.ReactNode,
    containerBindings?: IContainer
  };
}