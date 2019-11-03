import { IContent } from './content.interface';

interface IPresetContent {
  initial: IContent
}

export const PresetContent: IPresetContent = {
  initial: {
    className: undefined,
    textBindings: [{ text: "text" }],
    btnBindings: [{ text: "click" }],
    containerBindings: { colorBackground: "white" }
  }
}