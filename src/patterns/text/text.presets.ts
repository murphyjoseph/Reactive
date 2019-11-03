import { IText } from "./text.interface";

interface IPresetText {
  initial: IText,
  description: IText,
  copy: IText,
  navLink: IText,
  copyTitle: IText,
  headingone: IText,
  headingtwo: IText,
  headingthree: IText,
  label: IText,
  sublabel: IText,
  tag: IText
}

export const PresetText: IPresetText = {
  initial:  {
    className: undefined,
    kind: "p",
    colorText: "black",
    colorBackground: "none",
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
  },
  description: {
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
  },
  copy: {
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
  },
  navLink: {
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
  },
  copyTitle: {
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
  },
  headingone: {
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
  },
  headingtwo: {
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
  },
  headingthree: {
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
  },
  label: {
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
  },
  sublabel: {
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
  },
  tag: {
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
  }
}