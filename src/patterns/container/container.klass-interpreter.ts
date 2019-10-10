
import { IContainer } from './container.interface';
import styles from './container.module.scss';

const Styles = styles as { [key: string]: string };

export const containerKlassInterpreter = (bindings: IContainer) => {
  const klasses = []
  if (!!bindings.minHeight) klasses.push(Styles[`container-min-height-${bindings.minHeight}`]);
  if (!!bindings.maxHeight) klasses.push(Styles[`container-max-height-${bindings.maxHeight}`]);
  return klasses
}
