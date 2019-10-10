import React, { FC } from "react";

import { IProgressbar } from './progressbar.interface';
import { PresetProgressbar } from './progressbar.presets';
import styles from './progressbar.module.scss';

import { createNewBindings } from "../../services/Merge";

interface Props {
  passedBindings?: IProgressbar;
}

export const Progressbar: FC<Props> = ({ passedBindings }) => {

  if (!passedBindings) return <></>

  // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetProgressbar[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)

  // VIEW

  return (
    <progress className={styles.progressBar}
              max={bindings.max}
              value={bindings.value}>
    </progress>
  );
}