import React, { FC } from "react";

import { IContainer } from './container.interface';
import { PresetContainer } from './container.presets';

import { containerKlassInterpreter } from "./container.klass-interpreter";
import { createNewBindings } from "../../services/Merge";
import cat from "../../utilities/classNames";
import { Patternize } from "../patternize/patternize";

interface Props {
  passedBindings?: IContainer;
}

export const Container: FC<Props> = ({ passedBindings, children }) => {

  if (!passedBindings) return <></>

  // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetContainer[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)
  bindings.interpreterKlasses = cat(...containerKlassInterpreter(bindings));

  // VIEW

  return (
    <Patternize bindings={bindings}>
      {children}
    </Patternize>
  );
}
