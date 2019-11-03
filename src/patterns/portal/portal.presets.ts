import { IPortal } from '../portal/portal.interface';
interface IPresetPortal {
  initial: IPortal
}

export const PresetPortal: IPresetPortal = {
  initial: {
    className: undefined,
    preset: "initial",
    isBlurred: true
  }
}