import React, { FC } from "react";
import _merge from "lodash/merge";

import { IImg } from "./img.interface";
import { Text } from "../text/text"
import { PresetImg } from './img.presets';
import { img } from "./img.css.scss";

import { KlassInterpreter } from '../../services/KlassInterpreter';
import standardBreakpoints from "../../styles/constants/constant-breakpoints.module.scss";

import { utImgCircle } from "../../styles/application-styles.module.scss";
import cat from "../../utilities/classNames";

interface Props {
  passedBindings?: IImg;
}

export const Img: FC<Props> = ({ passedBindings }) => {

  // SET DEFAULTS

  const defaultBindings: IImg = {
    id: Img,
    ...PresetImg.setPreset(passedBindings)
  };

  const bindings = _merge(defaultBindings, passedBindings);
  const klasses = new KlassInterpreter(bindings);
  const patternKlasses = cat(img, bindings.className, ...klasses.getKlasses());
  const imgSettings = bindings.imgSettings!;

  // VIEW

  const imageContent = imgSettings.map((imageSource, index, imgSettings) => {

    const source = imageSource.src;

    if (index === 0) return <img className={bindings.isRoundedFull ? utImgCircle : ''} key={source} src={source} />

    const breakpoint = standardBreakpoints[imageSource.breakpoint!] as string;

    if (index === 1) return <source key={source} srcSet={source} media={`(max-width: ${breakpoint})`}></source>;

    const previousBreakpoint = standardBreakpoints[imgSettings[index - 1].breakpoint!] as string;
    const breakpointBegin = `${parseInt(previousBreakpoint) + 1}px`;

    return <source key={source} srcSet={source} media={`(min-width: ${breakpointBegin}) and (max-width: ${breakpoint})`}></source>;
  });

  return (
    <picture className={patternKlasses}>
      {imageContent}
      {
        bindings.textBindings &&
        <Text passedBindings={
          bindings.textBindings
        }/>
      }
    </picture>
  );
}
