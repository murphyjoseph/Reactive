import React, { FC } from "react";

import { IParagraph } from './paragraph.interface';
import { PresetParagraph } from './paragraph.presets';
import { Text } from '../text/text';
import { IText } from '../text/text.interface';

import { KlassInterpreter } from '../../services/KlassInterpreter';
import _merge from 'lodash/merge';

interface Props {
  passedBindings?: IParagraph;
}

export const Paragraph: FC<Props> = ({ passedBindings }) => {

  // SET DEFAULTS

  const defaultBindings = {
    id: Paragraph,
    ...PresetParagraph.setPreset(passedBindings)
  };

  const bindings = _merge(defaultBindings, passedBindings);
  const klasses = new KlassInterpreter(bindings);
  const patternKlasses = [bindings.className, ...klasses.getKlasses()].join(' ');

  // OPTIONAL DATA ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (!!patternKlasses) {
    optionalAttributes.className = patternKlasses;
  }

  // VIEW

  return (
    <div {...optionalAttributes}>
      {
        bindings.textBindings &&
        bindings.textBindings.map((textBinding: IText, index: number) => {
          textBinding.display = "inline";
          return (
            <span key={index}>
              <Text passedBindings={textBinding} />
              {' '}
            </span>
          );
        })
       }
     </div>
   );
}