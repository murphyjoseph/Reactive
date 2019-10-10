import React, { FC } from "react";

import { IBtn } from './btn.interface';
import { textBtn } from "../text/text.css.scss";
import { btn } from './btn.css.scss'
import { PresetBtn } from './btn.presets';
import { btnKlassInterpreter } from './btn.klass-interpreter';

import { Patternize } from "../patternize/patternize";
import cat from '../../utilities/classNames';
import { createNewBindings } from '../../services/Merge';

interface Props {
  passedBindings?: IBtn;
}

export const Btn: FC<Props> = ({ passedBindings }) => {

  if (!passedBindings) return <></>

  // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetBtn[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)
  bindings.interpreterKlasses = cat(...btnKlassInterpreter(bindings));
  bindings.internalKlasses = cat(btn, textBtn);

  console.log("Official Bindings")
  console.log(bindings)

  // VIEW

  return (
    <Patternize bindings={bindings}>
      {bindings.text}
    </Patternize>
  );
}