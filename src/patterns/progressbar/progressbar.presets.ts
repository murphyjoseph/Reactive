import { IProgressbar } from './progressbar.interface';

const initial: IProgressbar = {
  className: undefined,
  max: 100,
  value: 0
};

export const PresetProgressbar: any = {};
PresetProgressbar.initial = initial;
