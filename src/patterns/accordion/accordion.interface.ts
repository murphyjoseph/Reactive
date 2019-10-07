import { IPattern } from "../../interfaces/pattern.interface";
import { IContainer } from "../container/container.interface";

export interface IAccordion extends IPattern {
  preset?: "initial",
  isOpen?: boolean,
  wrapper?: {
    containerBindings?: IContainer
  }
  contentBar?: {
    containerBindings?: IContainer,
    slot?: JSX.Element | React.ReactNode
  }
  contentArea?: {
    containerBindings?: IContainer,
    slot?: JSX.Element | React.ReactNode
  }
}
