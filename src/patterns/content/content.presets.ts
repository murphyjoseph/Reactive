import { IContent } from './content.interface';

const initial: IContent = {
  className: undefined,
  textBindings: [{ text: "text" }],
  btnBindings: [{ text: "click" }],
  containerBindings: { colorBackground: "white" }
};

export const PresetContent: any = {};
PresetContent.initial = initial;
