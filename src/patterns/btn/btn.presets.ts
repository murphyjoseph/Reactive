import { IBtn } from './btn.interface';

const initial: IBtn = {
  className: undefined,
  isRounded: false,
  isSkinny: false,
  isFull: false
}

const full: IBtn = {
  className: undefined,
  isRounded: false,
  isSkinny: false,
  isFull: true,
}

export const PresetBtn: any = {}
PresetBtn.initial = initial
PresetBtn.full = full