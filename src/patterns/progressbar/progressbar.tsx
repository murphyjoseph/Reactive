import React, { FC } from "react";

import { IProgressbar } from './progressbar.interface';
import { PresetProgressbar } from './progressbar.presets';
import styles from './-progressbar.css.scss';

import _merge from 'lodash/merge';

interface Props {
  passedBindings?: IProgressbar;
}

export const Progressbar: FC<Props> = ({ passedBindings }) => {

  // SET DEFAULTS

  let defaultBindings: IProgressbar = {
    id: Progressbar,
    ...PresetProgressbar.setPreset(passedBindings)
  };

  const bindings = _merge(defaultBindings, passedBindings);

  // VIEW

  return (
    <progress className={styles.progressBar}
              max={bindings.max}
              value={bindings.value}>
    </progress>
  );
}