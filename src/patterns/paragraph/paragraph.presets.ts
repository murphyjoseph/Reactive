import { IParagraph } from './paragraph.interface';
import { Presetter } from '../../services/Presetter';

const main: IParagraph = {
  className: undefined,
  preset: "main"
};

export const PresetParagraph = new Presetter<IParagraph>(main);
PresetParagraph.presets.main = main;
