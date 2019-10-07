import constant_breakpoints from '../styles/constants/constant-breakpoints.module.scss';

type TBreakpoints = keyof typeof constant_breakpoints;

export interface IImageSource {
  src?: string,
  breakpoint?: TBreakpoints,
  height?: number,
  width?: number,
  aspectRatio?: "1:1" | "1:2" | "2:1" | "3:4" | "4:3" | "16:9" | "5:4" | "4:5",
  crop?: string | "scale" | "fit" | "limit" | "mfit" | "fill" | "lfill" | "pad" | "lpad" | "mpad" | "crop" | "thumb" | "imagga_crop" | "imagga_scale"
}