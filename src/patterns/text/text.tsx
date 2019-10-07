import React, { FC } from "react";

import { IText } from './text.interface';
import { textKlassInterpreter } from "./text.klass-interpreter";
import { PresetText } from './text.presets';

import cat from "../../utilities/classNames";
import { Patternize } from "../patternize/patternize";
import { createNewBindings } from "../../services/Merge";

interface Props {
  passedBindings?: IText;
}

export const Text: FC<Props> = ({ passedBindings }) => {

  if (!passedBindings) return <></>

  // // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetText[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)
  bindings.interpreterKlasses = cat(...textKlassInterpreter(bindings))

  // VIEW
  if (!bindings.condition) return null;

  return (
    <Patternize bindings={bindings}>
      {bindings.text}
    </Patternize>
  )
};