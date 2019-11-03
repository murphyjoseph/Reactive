import React, {FC, useLayoutEffect } from 'react';

import { createPortal } from 'react-dom';
import { IPortal } from './portal.interface';
import { PresetPortal } from './portal.presets';

import { createNewBindings } from '../../services/Merge';

interface Props {
  passedBindings?: IPortal;
}

// TODO MAKE WORK IN TESTS
const el = document.createElement('div') as HTMLElement
const portalRoot = document.getElementById('portal-root') as HTMLElement;

export const Portal: FC<Props> = ({ passedBindings, children }) => {

  // if (!passedBindings) return <></>

  // SET DEFAULTS
  // below is a temporary fix - if removed you will get an error regarding the useLayoutEffect hook
  // todo - fix above ^^
  passedBindings = !!passedBindings ? passedBindings : {};
  const presetType = !!passedBindings.preset ? passedBindings.preset : "initial"
  const presetBindings = PresetPortal[presetType]
  const bindings = createNewBindings(presetBindings, passedBindings)

  useLayoutEffect(() => {

    // Prevent scrolling on mount
    const appRoot = document.getElementById('root') as HTMLElement;

    if (bindings.isBlurred) {
      appRoot.style.filter = 'blur(5px)';
    }

    appRoot.style.overflow = 'hidden';
    portalRoot.appendChild(el);

    // Re-enable scrolling when component unmounts
    return () => {

      if (bindings.isBlurred) {
        appRoot.style.filter = 'blur()';
      }

      appRoot.style.overflow = 'visible';
      portalRoot.removeChild(el);
    };

  }, []); // Empty array ensures effect is only run on mount and unmount

  return createPortal(children, el);
}