import { IPanel } from './panel.interface';
import { Presetter } from '../../services/Presetter';

const main: IPanel = {
  className: undefined,
  preset: "main",
  isPortal: false,
  size: "size10",
  location: "right",
  containerBindings: {
    colorBackground: "white",
  },
  trigger: {},
  contentBar: {
    containerBindings: {
      padding: {
        direction: "all",
        size: "size2"
      },
      border: {
        direction: "bottom",
        size: "size2",
        color: "greyLight1"
      }
    }
  },
  contentArea: {
    containerBindings: {
      padding: {
        size: "size2",
        direction: "all"
      },
      colorBackground: "grey"
    }
  }
};

export const PresetPanel = new Presetter<IPanel>(main);
PresetPanel.presets.main = main;
