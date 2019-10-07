import { IMediaFlag } from './media-flag.interface';
import { Presetter } from '../../services/Presetter';

const main: IMediaFlag = {
  className: undefined,
  preset: "main",
  iconBindings: {
    textAlignment: "center"
  }
};

export const PresetMediaFlag = new Presetter<IMediaFlag>(main);
PresetMediaFlag.presets.main = main;
