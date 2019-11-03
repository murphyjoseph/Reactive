import { IProgressbar } from './progressbar.interface';

interface IPresetProgressbar {
  initial: IProgressbar
}

export const PresetProgressbar: IPresetProgressbar = {
  initial: {
    className: undefined,
    max: 100,
    value: 0
  }
}