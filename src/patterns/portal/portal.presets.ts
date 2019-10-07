import { IPortal } from '../portal/portal.interface';
import { Presetter } from '../../services/Presetter';

const main: IPortal = {
  className: undefined,
  preset: "main",
  isBlurred: true
};

export const PresetPortal = new Presetter<IPortal>(main);
PresetPortal.presets.main = main;
