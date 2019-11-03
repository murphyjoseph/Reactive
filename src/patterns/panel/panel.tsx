import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
import _merge from 'lodash/merge';

import { IPanel } from './panel.interface';
import { PresetPanel } from './panel.presets';
import { panelNoPortal } from './panel.module.scss';
import styles from './panel.module.scss';
import ztyles, { utPositionFixed } from '../../styles/application-styles.module.scss';

import { Portal } from '../portal/portal';
import { Container } from '../container/container';
import { Icon } from '../icon/icon'

import cat from '../../utilities/classNames';
import { panelKlassInterpreter } from './panel.klass-interpreter';
import { useMouseDown } from '../../hooks/mousedown';
import { KlassInterpreter } from '../../services/KlassInterpreter';
// import { stFlexColAuto1, stFlexColNoGrow, utPositionRelative, utPositionAbsolute, utPositionFixed, utOverflowYAuto } from '../../styles/application-styles.module.scss';
import { panelPortal } from './panel.module.scss';

const Ztyles = ztyles as { [key: string]: string };

interface Props {
  passedBindings?: IPanel;
}

export const Panel: FC<Props> = ({ passedBindings }) => {

  const node = React.createRef<HTMLDivElement>();
  const [isActive, setIsActive] = useState(false);
  const { mousedownHook } = useMouseDown();
  const nodePanelBody = useRef(null);

  const clickOff = useCallback((event?: React.SyntheticEvent) => {
    if (!event
      || !!node
      && !!node.current
      && node.current.contains(event.target as HTMLElement)) return;

      // nodePanelBody wont be null on click but typescript doesnt care... need to find workaround to get rid of any
      const myNode: any = nodePanelBody.current
      if (myNode.contains(event.target as HTMLElement)) return
      // ^^ this prevents the panel from closing if you click inside the panel body

    setIsActive(false);
  }, [isActive]);

  useEffect(mousedownHook(clickOff), [clickOff]);

  // SET DEFAULTS

  let defaultBindings: IPanel = {
    id: Panel,
    ...PresetPanel.setPreset(passedBindings)
  };

  const Styles = styles as { [key: string]: string };

  const bindings = _merge(defaultBindings, passedBindings);
  const panelKlasses = new KlassInterpreter(bindings);
  panelKlassInterpreter(bindings, panelKlasses);

  const location = `-${bindings.location}`;
  const locationKlass = Styles[`panel-direction${location}`];

  const size = `-${bindings.size}`;
  const panelSize = Styles[`panel${size}`]

  const { trigger, contentBar, contentArea } = bindings;

  const handleTriggerClick = (event?: React.SyntheticEvent): void => {
    if (!event) return;
    if (!!event) event.preventDefault();
    if (!!trigger && !!trigger.containerBindings && !!trigger.containerBindings.onClick)
      trigger.containerBindings.onClick(event);
    setIsActive(true);
  };

  // OPTIONAL DATA ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (bindings.className) optionalAttributes.className = bindings.className;

  // VIEW

  const PanelBody: FC<Props> = () => {
    return (
      <Container passedBindings={bindings.containerBindings}>
        {/* CONTENT BAR */}
        <Container passedBindings={({
          ...contentBar.containerBindings,
          className: 'ut-position-relative'
        })}>
          <Container passedBindings={({
            padding: {
              direction: "right",
              size: "size5"
            }
          })}>
            {contentBar.slot}
          </Container>
          <Container passedBindings={({
            position: {
              type: "absolute",
              direction: "centerVerticalRight"
            }
          })}>
            <Icon passedBindings={({
              onClick: () => setIsActive(false),
              name: "IconMinus",
              size: "size4",
              colorFill: "grey",
              className: cat(Ztyles.stFlexColAuto1, Ztyles.stFlexColNoGrow),
              margin: {
                size: "size1",
                direction: "right"
              }
            })} />
          </Container>
        </Container>
        {/* CONTENT AREA */}
        <Container passedBindings={contentArea.containerBindings}>
          {contentArea.slot}
        </Container>
      </Container>
    )
  }

  return (
    <div
      ref={node}
      { ...optionalAttributes }
    >
      {
        isActive && bindings.isPortal &&
        <Portal passedBindings={bindings.portalBindings}>
          <div
            className={cat('ut-position-fixed', 'ut-overflow-y-auto', 'panel-portal', panelSize, locationKlass)}
            ref={nodePanelBody}
          >
            <PanelBody />
          </div>
        </Portal>
      }
      {
        isActive && bindings.isPortal === false &&
        <div
          className={cat('ut-position-absolute', 'ut-overflow-y-auto', 'panel-no-portal', panelSize, locationKlass)}
          ref={nodePanelBody}
        >
          <PanelBody />
        </div>
      }
      {/* TRIGGER */}
      <Container passedBindings={({
        ...trigger.containerBindings,
        className: Ztyles.utPositionRelative,
        onClick: handleTriggerClick
      })}>
        {trigger.slot}
      </Container>
    </div>
  )
}
