import { IProgressbar } from './progressbar.interface';
import { Presetter } from '../../services/Presetter';

const main: IProgressbar = {
  className: undefined,
  preset: "main",
  max: 100,
  value: 0
};

export const PresetProgressbar = new Presetter<IProgressbar>(main);
PresetProgressbar.presets.main = main;
