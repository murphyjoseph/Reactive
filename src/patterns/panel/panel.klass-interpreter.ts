import { IPanel } from "./panel.interface";
import { KlassInterpreter } from '../../services/KlassInterpreter';
import styles from './panel.module.scss';

const Styles = styles as { [key: string]: string };

export const panelKlassInterpreter = (bindings: IPanel, klasses: KlassInterpreter) => {

  if (!!bindings.size) {
    const size = `-${bindings.size}`;
    klasses.addKlass(Styles[`panel${size}`]);
  }

}
