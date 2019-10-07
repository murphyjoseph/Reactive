import { IContainer } from "./container.interface";

const initial: IContainer = {
  className: undefined,
  href: undefined,
};

const card: IContainer = {
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
};

const section: IContainer = {
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

export const PresetContainer: any = {};
PresetContainer.initial = initial;
PresetContainer.card = card;
PresetContainer.section = section;
