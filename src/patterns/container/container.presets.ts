import { IContainer } from "./container.interface";

interface IPresetContainer {
  initial: IContainer,
  section: IContainer,
  card: IContainer
}

export const PresetContainer: IPresetContainer = {
  initial: {
    className: undefined,
    href: undefined,
  },
  card:{
    className: undefined,
    href: undefined,
    border: {
      size: "size1",
      color: "greyLight1",
      direction: "all"
    },
    padding: {
      direction: "all",
      size: "size2"
    }
  },
  section: {
    colorBackground: "white",
    margin: {
      size: "size1",
      direction: "all"
    },
    padding: {
      size: "size1",
      direction: "all"
    }
  }
}