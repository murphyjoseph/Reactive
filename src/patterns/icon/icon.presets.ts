import { IIcon } from './icon.interface';
import { Presetter } from '../../services/Presetter';

const main: IIcon = {
  className: undefined,
  preset: "main",
  href: undefined,
  target: undefined,
  onClick: undefined,
  name: undefined,
  size: "size3",
  colorFill: "black"
};

export const PresetIcon = new Presetter<IIcon>(main);
PresetIcon.presets.main = main;
