import { IPattern } from '../interfaces/pattern.interface';
import _cloneDeep from 'lodash/cloneDeep';

// TODO probably shouldn't use _cloneDeep
export class Presetter<T extends IPattern> {

  defaultPreset: any;
  presets: any;

  constructor(defaultPreset: any) {
    this.defaultPreset = defaultPreset;
    this.presets = {};
  }

  setPreset(passedBindings?: any) {
    if (!!passedBindings && !!passedBindings.preset) {
      return _cloneDeep({ ...this.presets[passedBindings.preset] })
    } else {
      return _cloneDeep({ ...this.defaultPreset })
    }
  }

  establishPreset(passedBindings?: any) {
    let presetKey = !!passedBindings.preset ? passedBindings.preset : "main"
    return this.presets[presetKey]
  }

}
