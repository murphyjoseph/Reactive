import React, { FC } from "react";

import { IContent } from './content.interface';
import { PresetContent } from './content.presets';

import { IText } from '../text/text.interface';
import { IBtn } from '../btn/btn.interface';
import { Container } from '../container/container';
import { Btn } from '../btn/btn';
import { Text } from '../text/text';
import { createNewBindings } from "../../services/Merge";

interface Props {
  passedBindings?: IContent;
}

export const Content: FC<Props> = ({ passedBindings }) => {

  if (!passedBindings) return <></>

  // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetContent[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)

  // VIEW

  return (
    <Container passedBindings={bindings.containerBindings}>
      {
        bindings.textBindings &&
        bindings.textBindings.map((i: IText, index: number) => {
          return <Text passedBindings={i} key={index} />
        })
      }
      {
        bindings.btnBindings &&
        bindings.btnBindings.map((i: IBtn, index: number) => {
          return <Btn passedBindings={i} key={index} />
        })
      }
    </Container>
  );
}