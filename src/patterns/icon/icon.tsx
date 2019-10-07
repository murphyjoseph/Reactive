import React, { FC } from "react";

import { IIcon } from './icon.interface';
import { EIcon } from './icon.enum';
import { PresetIcon } from './icon.presets';

import { KlassInterpreter } from '../../services/KlassInterpreter';
import { capitalizeFirst } from "../../utilities/capitalizeFirst";

import _merge from 'lodash/merge';
import styles from './icon.module.scss';

import { ReactComponent as IconX } from '../../assets/icons/icon_x.svg';

interface Props {
  passedBindings?: IIcon;
}

export const Icon: FC<Props> = ({ passedBindings }) => {

  // SET DEFAULTS

  let defaultBindings: IIcon = {
    id: Icon,
    ...PresetIcon.setPreset(passedBindings)
  };

  const bindings = _merge(defaultBindings, passedBindings);
  const Styles = styles as { [key: string]: string };
  const klasses = new KlassInterpreter(bindings);

  if (!!bindings.size) {
    const sizeKlass = capitalizeFirst(bindings.size);
    klasses.addKlass(Styles[`is${sizeKlass}`]);
  }

  const patternKlasses = [styles.icon, bindings.className, styles.icon__svg, ...klasses.getKlasses()].join(' ');

  // OPTIONAL ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (bindings.onClick) optionalAttributes.onClick = bindings.onClick;

  const attributes: any = {};
  attributes['className'] = [bindings.className, styles.icon__svg].join(' ');
  // VIEW
  let IconMarkup: React.ReactNode;

  switch(bindings.name) {
    case EIcon.X:
      IconMarkup = <IconX {...optionalAttributes} {...attributes} />
      break;
  }

  if (bindings.href) {
    return (
      <a href={bindings.href} target={bindings.target} className={patternKlasses}>
        {IconMarkup}
      </a>
    )
  }

  return (
    <div className={patternKlasses}>
      {IconMarkup}
    </div>
  );
}
