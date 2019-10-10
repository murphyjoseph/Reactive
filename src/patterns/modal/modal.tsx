import React, { FC, useState } from 'react';
import _merge from 'lodash/merge';
import ReactModal from 'react-modal';

import { IModal } from './modal.interface';
import { PresetModal } from './modal.presets';
import styles from './modal.module.scss';

import { Container } from '../container/container';
import { Btn } from '../btn/btn';
import { Icon } from '../icon/icon';

import { KlassInterpreter } from '../../services/KlassInterpreter';
import { capitalizeFirst } from '../../utilities/capitalizeFirst';
import cat from '../../utilities/classNames';

interface Props {
  passedBindings?: IModal;
}

// to fix errors in jest regarding modal
// https://github.com/reactjs/react-modal/issues/632#issuecomment-378755186
if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#portal-root');

export const Modal: FC<Props> = ({ passedBindings }) => {

  // HOOKS


  // SET DEFAULTS

  let defaultBindings: IModal = {
    id: Modal,
    ...PresetModal.setPreset(passedBindings)
  };

  const Styles = styles as { [key: string]: string };
  const bindings: IModal = _merge(defaultBindings, passedBindings);
  const klasses: KlassInterpreter = new KlassInterpreter(bindings);
  const patternKlasses = cat(bindings.className, ...klasses.getKlasses())

  const { contentArea, contentBar, contentWrapper, trigger } = bindings;

  const [isActive, setIsActive] = useState(!!bindings.open);
  const setIsOpen = (value: boolean) => {
    if (!!bindings.setOpen) bindings.setOpen(value);
    setIsActive(value);
  };

  const handleClick = (e: React.SyntheticEvent): void => {
    if (!!e) e.preventDefault();
    if (!!bindings.contentArea && !!bindings.contentArea.btnBindings && !!bindings.contentArea.btnBindings.onClick) bindings.contentArea.btnBindings.onClick(e);
    setIsOpen(false);
  };

  const onIconCloseClick = () => {
    if (!!bindings.contentBar && !!bindings.contentBar.onIconCloseClick) bindings.contentBar.onIconCloseClick();
    setIsOpen(false);
  }

  // OPTIONAL DATA ATTRIBUTES

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {};
  if (!!bindings.className) optionalAttributes.className = patternKlasses;

  // VIEW

  let flexHeightSize = "";
  let flexHeightKlass = "";

  let flexWidthSize = "";
  let flexWidthKlass = "";

  let fullScreenAlwaysKlass = "";

  if (!!contentWrapper && !!contentWrapper.mode && !!contentWrapper.mode.flex) {
    if (!!contentWrapper.mode.flex.height) {
      flexHeightSize = capitalizeFirst(contentWrapper.mode.flex.height);
      flexHeightKlass = Styles[`modalContentFlexHeight${flexHeightSize}`];
    }

    if (!!contentWrapper.mode.flex.width) {
      flexWidthSize = capitalizeFirst(contentWrapper.mode.flex.width);
      flexWidthKlass = Styles[`modalContentFlexWidth${flexWidthSize}`];
    }
  }

  if (!!contentWrapper && !!contentWrapper.mode && !!contentWrapper.mode.fullScreen) {
    if (contentWrapper.mode.fullScreen.isOnAlways) fullScreenAlwaysKlass = styles.modalContentFullScreenAlways;
  }

  const doOnRequestClose = () => {
    setIsOpen(false);
    if (!!bindings.onRequestClose) bindings.onRequestClose();
  }

  return (
    <div {...optionalAttributes}>
      {
        isActive &&
        <ReactModal
          isOpen={isActive}
          contentLabel={bindings.label}
          shouldCloseOnEsc={true}
          overlayClassName={styles.modalOverlay}
          className={styles.modalContent}
          onRequestClose={doOnRequestClose}>
          {
            !!bindings.contentWrapper &&
            <Container passedBindings={({
              ...bindings.contentWrapper.containerBindings,
              className: cat(flexWidthKlass, flexHeightKlass, fullScreenAlwaysKlass),
              padding: {
                size: "size5",
                direction: "all"
              }
            })}>
            {
              !!bindings.contentBar &&
              <Container passedBindings={bindings.contentBar.containerBindings}>
                {
                  !!bindings.contentBar &&
                  bindings.contentBar.slot
                }
                <div className={styles.modalCloseIcon}>
                  {
                    !!bindings.contentBar.isIconCloseDisplayed &&
                    <Icon passedBindings={({
                      onClick: onIconCloseClick,
                      name: "IconX",
                      textAlignment: "right",
                      size: "size3"
                    })} />
                  }
                </div>
              </Container>
            }
            {
              !!bindings.contentArea && isActive &&
              bindings.contentArea.slot
            }
            {
              !!bindings.contentArea && !!bindings.contentArea.btnBindings && !!bindings.contentArea.btnBindings.text &&
              <Btn passedBindings={({
                ...bindings.contentArea.btnBindings,
                onClick: handleClick
              })} />
            }
            </Container>
          }
        </ReactModal>
      }

      {
        !!bindings && !!bindings.trigger && !!bindings.trigger.slot &&
        <Container passedBindings={({
          ...bindings.trigger.containerBindings,
          onClick: () => setIsOpen(true)
        })}>
          {
            !!bindings.trigger &&
            bindings.trigger.slot
          }
        </Container>
      }
    </div>
  );
}