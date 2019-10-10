import { IField } from "./field.interface";
import { KlassInterpreter } from '../../services/KlassInterpreter';
import { capitalizeFirst } from '../../utilities/capitalizeFirst';
import styles from './field.module.scss';
import { utMarginBottomSize3 } from "../../styles/application-styles.module.scss";

const Styles = styles as { [key: string]: string };

export const fieldKlassInterpreter = (bindings: IField, klasses: KlassInterpreter) => {
  const kind = capitalizeFirst(bindings.kind!);
  if (!!bindings.kind) klasses.addKlass(Styles[`nsField${kind}`]);
  if (bindings.isBottomSpaced) klasses.addKlass(utMarginBottomSize3);
  if (bindings.isThin) klasses.addKlass(Styles.nsFieldThin);
}
