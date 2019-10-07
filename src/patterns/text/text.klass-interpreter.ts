import { IText } from './text.interface';
import styles from './text.css.scss';

const Styles = styles as { [key: string]: string };

export const textKlassInterpreter = (bindings: IText) => {
  const { preset } = bindings;
  const klasses = [];
  // console.log(styles)

  if (bindings.isTiny) klasses.push(Styles[`text-${preset}-tiny`]);
  if (bindings.isBig === true) klasses.push(Styles[`text-${preset}-big`]);
  if (bindings.isUnderlined) klasses.push(Styles.textUnderlined);
  if (bindings.isBold) klasses.push(Styles.textBold);
  if (bindings.isThin) klasses.push(Styles.textThin);
  if (bindings.isItalic) klasses.push(Styles.textItalic);
  if (bindings.isNowrap) klasses.push(Styles.textNowrap);
  if (bindings.isCrossedOut) klasses.push(Styles.textCrossedOut);
  if (!!preset) klasses.push(Styles[`text-${preset}`]);
  if (!!bindings.characterWidth) klasses.push(Styles[`text-character-width-${bindings.characterWidth}`]);
  if (!!bindings.wordBreak) klasses.push(Styles[`text-word-break-${bindings.wordBreak}`]);
  if (bindings.textTransform === "capitalize") {
    klasses.push(Styles.textCapitalize);
  } else if (bindings.textTransform === "uppercase") {
    klasses.push(Styles.textUppercase);
  }

  return klasses;
}
