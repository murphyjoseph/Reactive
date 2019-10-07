import React, { FC } from "react";

import { IDivider } from './divider.interface';
import { PresetDivider } from './divider.presets';
import { createNewBindings } from "../../services/Merge";

interface Props {
  passedBindings?: IDivider;
}

export const Divider: FC<Props> = ({ passedBindings }) => {

  if (!passedBindings) return <></>

  // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetDivider[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)

  // OPTIONAL ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (!!bindings.className) optionalAttributes.className = bindings.className;

  // VIEW

  return (
    <hr {...optionalAttributes} />
  );
};
