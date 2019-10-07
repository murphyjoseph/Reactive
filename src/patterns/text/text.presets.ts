import { IText } from "./text.interface";

const initial: IText = {
  className: undefined,
  kind: "p",
  colorText: "black",
  colorBackground: "white",
  isBold: true,
  display: "inlineBlock",
  padding: {
    size: "size1",
    direction: "all"
  },
  margin: {
    size: "size1",
    direction: "all"
  },
  condition: true
};

const headingone: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "h1",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const headingtwo: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "h2",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const headingthree: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  textTransform: "uppercase",
  kind: "h3",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const copy: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "p",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const navLink: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "a",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const copyTitle: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "p",
  href: undefined,
  display: undefined,
  isBold: true,
  isItalic: undefined,
  isTiny: undefined,
  isBig: true,
  isNowrap: undefined,
  isUnderlined: undefined,
  textTransform: "uppercase",
  condition: true
};

const description: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "p",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const label: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "p",
  textTransform: "uppercase",
  href: undefined,
  display: undefined,
  isBold: true,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const sublabel: IText = {
  className: undefined,
  colorText: "black",
  colorBackground: "none",
  characterWidth: "none",
  kind: "p",
  href: undefined,
  display: undefined,
  isBold: undefined,
  isItalic: undefined,
  isTiny: undefined,
  isBig: undefined,
  isNowrap: undefined,
  isUnderlined: undefined,
  condition: true
};

const tag: IText = {
  className: undefined,
  kind: "p",
  colorText: "white",
  colorBackground: "primary",
  isBold: true,
  display: "inlineBlock",
  padding: {
    size: "size1",
    direction: "all"
  },
  margin: {
    size: "size1",
    direction: "all"
  },
  condition: true
};

export const PresetText: any = {}
PresetText.initial = initial;
PresetText.description = description;
PresetText.copy = copy;
PresetText.navLink = navLink;
PresetText.copyTitle = copyTitle;
PresetText.headingone = headingone;
PresetText.headingtwo = headingtwo;
PresetText.headingthree = headingthree;
PresetText.label = label;
PresetText.sublabel = sublabel;
PresetText.tag = tag;