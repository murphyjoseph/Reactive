import { IPanel } from "./panel.interface";
import { KlassInterpreter } from '../../services/KlassInterpreter';
import { capitalizeFirst } from '../../utilities/capitalizeFirst';
import styles from './-panel.css.scss';

const Styles = styles as { [key: string]: string };

export const panelKlassInterpreter = (bindings: IPanel, klasses: KlassInterpreter) => {

  if (!!bindings.size) {
    const size: string = capitalizeFirst(bindings.size);
    klasses.addKlass(Styles[`panelSize${size}`]);
  }

}
