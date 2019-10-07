import { IModal } from './modal.interface';
import { Presetter } from '../../services/Presetter';

const main: IModal = {
  className: undefined,
  preset: "main",
  trigger: {},
  contentWrapper: {
    mode: {
      fullScreen: {
        isOnAlways: true
      }
    },
    containerBindings: {
      colorBackground: "white",
      shadow: {
        size: "size1",
        direction: "all"
      },
      position: {
        type: "absolute",
        direction: "center"
      }
    }
  },
  contentArea: {},
  contentBar: {
    isIconCloseDisplayed: true
  }
};

const customMode: IModal = {
  className: undefined,
  preset: "customMode",
  trigger: {},
  contentWrapper: {
    containerBindings: {
      colorBackground: "white",
      shadow: {
        size: "size1",
        direction: "all"
      },
      position: {
        type: "absolute",
        direction: "center"
      }
    }
  },
  contentArea: {},
  contentBar: {
    isIconCloseDisplayed: true
  }
};

export const PresetModal = new Presetter<IModal>(main);
PresetModal.presets.main = main;
PresetModal.presets.customMode = customMode;
