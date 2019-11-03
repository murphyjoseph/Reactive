import { IDivider } from './divider.interface';

interface IPresetDivider {
  initial: IDivider
}

export const PresetDivider: IPresetDivider = {
  initial: {
    className: undefined,
    margin: {
      direction: "vertical",
      size: "size2"
    },
    border: {
      direction: "bottom",
      size: "size1",
      color: "greyLight1"
    }
  }
}