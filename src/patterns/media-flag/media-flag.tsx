import React, { FC } from 'react';

import { IMediaFlag } from './media-flag.interface';
import { PresetMediaFlag } from './media-flag.presets';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';
import { IText } from '../text/text.interface';
import { Container } from '../container/container';
import { Img } from '../img/img';

import { KlassInterpreter } from '../../services/KlassInterpreter';
import { stFlex, stFlexColAuto1, stFlexColAuto3, stFlexColYCenter } from '../../styles/application-styles.module.scss';
import _merge from 'lodash/merge';


interface Props {
  passedBindings?: IMediaFlag;
}

export const MediaFlag: FC<Props> = ({ passedBindings }) => {

  // SET DEFAULTS

  let defaultBindings: IMediaFlag = {
    id: MediaFlag,
    ...PresetMediaFlag.setPreset(passedBindings)
  };

  const bindings = _merge(defaultBindings, passedBindings);
  const showImg = !!bindings.imgBindings && !!bindings.imgBindings.imgSettings
  const showIcon = !!bindings.iconBindings && !!bindings.iconBindings.name
  const showText = !!bindings.textBindings

  // VIEW

  return (
    <Container passedBindings={bindings.containerBindings}>
      <div className={stFlex}>
        {
          showIcon &&
          <div className={[stFlexColAuto1, stFlexColYCenter].join(' ')}>
            <Icon passedBindings={bindings.iconBindings} />
          </div>
        }
        {
          showImg &&
          <div className={[stFlexColAuto1, stFlexColYCenter].join(' ')}>
            <Img passedBindings={bindings.imgBindings} />
          </div>
        }
        {
          showText &&
          <div className={stFlexColAuto3}>
            {
              bindings.textBindings &&
              bindings.textBindings.map((i: IText, index: number) => {
                if (!i.text) {
                  return null;
                }
                i.display = "block";
                return <Text passedBindings={i} key={index} />
              })
            }
          </div>
        }
      </div>
    </Container>
  );
}
