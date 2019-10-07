import { IDivider } from './divider.interface';

const initial: IDivider = {
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
};

export const PresetDivider: any = {};
PresetDivider.initial = initial;
