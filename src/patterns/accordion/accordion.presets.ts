import { IAccordion } from './accordion.interface';

interface IPresetAccordion {
  initial: IAccordion
}

export const PresetAccordion: IPresetAccordion = {
  initial: {
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
  }
}