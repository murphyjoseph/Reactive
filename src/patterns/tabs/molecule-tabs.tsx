import React, { FC, useState } from 'react';

import { ITabs, ITab } from './tabs.interface';
import { PresetTabs } from './tabs.presets';
import { Container } from '../container/container';
import { MediaFlag } from '../media-flag/media-flag';

import { KlassInterpreter } from '../../services/KlassInterpreter';
import { stFlexColAuto1, stFlex, stFlexNowrap, stFlexColPercent100 } from '../../styles/application-styles.module.scss'
import _merge from 'lodash/merge';

interface Props {
  passedBindings?: ITabs;
}

export const Tabs: FC<Props> = ({ passedBindings }) => {

  // SET DEFAULTS

  let defaultBindings: ITabs = {
    id: Tabs,
    ...PresetTabs.setPreset(passedBindings)
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const bindings = _merge(defaultBindings, passedBindings);
  const klasses = new KlassInterpreter(bindings);
  const patternKlasses = [bindings.className, ...klasses.getKlasses()].join(' ');

  function handleActiveIndexChange(clickedIndex: number) {
    setActiveIndex(clickedIndex);
    if (bindings.tabs) {
      bindings.tabs.forEach((tab: any, tabIndex: number) => {
        if (tabIndex === clickedIndex) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    }
  }

  // OPTIONAL DATA ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (!!patternKlasses) {
    optionalAttributes.className = patternKlasses;
  }

  // VIEW

  return (
    <div { ...optionalAttributes }>

      {/* TAB TRIGGERS */}
      <div className={[stFlex, stFlexNowrap].join(' ')}>
        {
          bindings.tabs &&
          bindings.tabs.map((tab: ITab, index: number) => {

            if (!!tab.mediaFlagBindings && !!tab.mediaFlagBindings.iconBindings) {
              if (index === activeIndex) {
                if (tab.mediaFlagBindings.iconBindings.name === "IconHanger") {
                  tab.mediaFlagBindings.iconBindings.colorStroke = "primary"
                  tab.mediaFlagBindings.iconBindings.colorFill = "transparent"
                } else {
                  tab.mediaFlagBindings.iconBindings.colorFill = "primary"
                }
              } else {
                if (tab.mediaFlagBindings.iconBindings.name === "IconHanger") {
                  tab.mediaFlagBindings.iconBindings.colorStroke = "greyLight1"
                  tab.mediaFlagBindings.iconBindings.colorFill = "transparent"
                } else {
                  tab.mediaFlagBindings.iconBindings.colorFill = "greyLight1"
                }
              }
            }

            return (
              <div key={index} className={stFlexColAuto1}>
                <Container passedBindings={({
                  onClick: () => handleActiveIndexChange(index),
                  padding: {
                    size: "size2",
                    direction: "all"
                  }
                })}>
                  <MediaFlag passedBindings={ tab.mediaFlagBindings } />
                </Container>
              </div>
            )

          })
        }
      </div>

      {/* TABS CONTENT */}
      <div className={stFlex}>
        <div className={stFlexColPercent100}>
          {
            bindings.tabs &&
            bindings.tabs.map((tab: ITab, index: number) => {

              return (
                <div key={index}>
                  {
                    index === activeIndex &&
                    tab.slotContent
                  }
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  );
}