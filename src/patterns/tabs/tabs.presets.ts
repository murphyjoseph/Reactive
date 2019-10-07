import { ITabs } from './tabs.interface';
import { Presetter } from '../../services/Presetter';

const main: ITabs = {
  className: undefined,
  preset: "main"
};

export const PresetTabs = new Presetter(main);
PresetTabs.presets.main = main;
