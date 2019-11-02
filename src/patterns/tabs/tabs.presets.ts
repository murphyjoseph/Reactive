import { ITabs } from './tabs.interface';

interface IPresetTabs {
  initial?: ITabs
}

export const PresetTabs: IPresetTabs = {
  initial: {
    className: undefined,
    preset: "initial"
  }
}