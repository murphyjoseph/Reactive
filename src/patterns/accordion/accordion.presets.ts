import { IAccordion } from './accordion.interface';

const initial: IAccordion = {
  className: undefined,
  contentBar: {
    containerBindings: {
      padding: {
        size: "size1",
        direction: "all"
      },
      colorBackground: "grey"
    }
  },
  contentArea: {
    containerBindings: {
      padding: {
        size: "size1",
        direction: "all"
      },
      colorBackground: "global"
    }
  },
  wrapper: {
    containerBindings: {
      border: {
        size: "size1",
        direction: "all",
        color: "white"
      }
    }
  }
};

export const PresetAccordion: any = {};
PresetAccordion.initial = initial;
