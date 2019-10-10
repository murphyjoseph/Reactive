import React, { FC } from "react";

import { IAccordion } from './accordion.interface';
import { Container } from '../container/container';
import { PresetAccordion } from './accordion.presets';

import styles from './accordion.css.scss';
import { createNewBindings } from "../../services/Merge";

interface Props {
  passedBindings?: IAccordion
}

export const Accordion: FC<Props> = ({ passedBindings }) => {

  if (!passedBindings) return <></>

  // SET DEFAULTS

  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetAccordion[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)
  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {};
  if (!!bindings.className) optionalAttributes.className = bindings.className;

  // VIEW

  return (
    <>
      {
        !!bindings.wrapper && !!bindings.contentArea && !!bindings.contentBar &&
        <Container
          {...optionalAttributes}
          passedBindings={bindings.wrapper.containerBindings}
        >
          <details
            className={styles.accordion}
            {...(bindings.isOpen ? { open: true } : {})}
          >
            <summary className={styles.accordion__summary}>
              <Container passedBindings={bindings.contentBar.containerBindings}>
                {bindings.contentBar.slot}
              </Container>
            </summary>
            <Container passedBindings={bindings.contentArea.containerBindings}>
              {bindings.contentArea.slot}
            </Container>
          </details>
        </Container>
      }
    </>
  );
}
