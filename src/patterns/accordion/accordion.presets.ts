import { IAccordion } from './accordion.interface';
import { Presetter } from '../../services/Presetter';

const initial: IAccordion = {
  className: undefined,
  contentBar: {
    containerBindings: {
      padding: {
        size: "size1",
        direction: "all"
      },
      colorBackground: "greyLight2"
    }
  },
  contentArea: {
    containerBindings: {
      padding: {
        size: "size1",
        direction: "all"
      }
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
