import { IBtn } from './btn.interface';

interface IPresetBtn {
  initial: IBtn,
  full: IBtn
}

export const PresetBtn: IPresetBtn = {
  initial: {
    className: undefined,
    isRounded: false,
    isSkinny: false,
    isFull: false
  },
  full: {
    className: undefined,
    isRounded: false,
    isSkinny: false,
    isFull: true,
  }
}