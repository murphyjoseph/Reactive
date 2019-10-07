import { IPattern } from '../../interfaces/pattern.interface';
import { IContainer } from '../container/container.interface';
import { IPortal } from '../portal/portal.interface';
import { TSizeLabels } from '../../types/util-types';

export interface IPanel extends IPattern {
  preset?: "main",
  location: "top" | "bottom" | "right" | "left",
  isPortal: boolean,
  portalBindings?: IPortal,
  size: TSizeLabels,
  containerBindings?: IContainer,
  forceClose?: boolean,
  isHandlingToggleOutside?: boolean,
  trigger: {
    containerBindings?: IContainer,
    slot?: JSX.Element | React.ReactNode
  },
  contentBar: {
    containerBindings?: IContainer,
    slot?: JSX.Element | React.ReactNode
  },
  contentArea: {
    containerBindings?: IContainer,
    slot?: JSX.Element | React.ReactNode
  }
}