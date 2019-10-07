import { TColSizes } from "../types/util-types";
import { IStylesBreakpoint } from "./styles.interface";

export interface IColumn extends IStylesBreakpoint {
  size?: TColSizes
}