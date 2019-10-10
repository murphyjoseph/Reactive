import { IBtn } from "./btn.interface";
import styles from './btn.module.scss';

const Styles = styles as { [key: string]: string };

export const btnKlassInterpreter = (bindings: IBtn) => {
  const klasses = []
  if (!!bindings.isStandard) klasses.push(Styles.btnStandard);
  if (!!bindings.isFull) klasses.push(Styles.btnFull);
  if (!!bindings.isSkinny) klasses.push(Styles.btnSkinny);
  if (!!bindings.isDisabled) klasses.push(Styles.btnDisabled);
  if (!!bindings.isCentered) klasses.push(Styles.btnCentered);
  if (bindings.brand !== undefined) klasses.push(Styles[`btn-${bindings.brand}`]);
  return klasses
}
