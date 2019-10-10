import { IField } from "./field.interface";
import { KlassInterpreter } from '../../services/KlassInterpreter';
import styles from './field.module.scss';
import { utMarginBottomSize3 } from "../../styles/application-styles.module.scss";

const Styles = styles as { [key: string]: string };

export const fieldKlassInterpreter = (bindings: IField, klasses: KlassInterpreter) => {
  if (!!bindings.kind) klasses.addKlass(Styles[`ns-field-${bindings.kind}`]);
  if (bindings.isBottomSpaced) klasses.addKlass(utMarginBottomSize3);
  if (bindings.isThin) klasses.addKlass(Styles.nsFieldThin);
}
