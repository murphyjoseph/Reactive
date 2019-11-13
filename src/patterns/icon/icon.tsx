import React, { FC } from "react";
import _merge from 'lodash/merge';

import { IIcon } from './icon.interface';
import { EIcon } from './icon.enum';
import { PresetIcon } from './icon.presets';

import { KlassInterpreter } from '../../services/KlassInterpreter';
import { capitalizeFirst } from "../../utilities/capitalizeFirst";

import styles from './icon.module.scss';
import { ReactComponent as IconX } from '../../assets/icons/icon_x.svg';
import { cat } from '../../utilities/classNames';

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
    klasses.addKlass(Styles[`is-${sizeKlass}`]);
  }

  const patternKlasses = cat(styles.icon, bindings.className, styles.icon__svg, ...klasses.getKlasses());

  // OPTIONAL ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (bindings.onClick) optionalAttributes.onClick = bindings.onClick;

  const attributes: any = {};
  attributes['className'] = cat(bindings.className, styles.icon__svg);
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
