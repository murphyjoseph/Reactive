import { IImg } from './img.interface';
import { Presetter } from '../../services/Presetter';

const main: IImg = {
  className: undefined,
  preset: "main",
  imgSettings: [
    { src: "https://via.placeholder.com/100x100" }
  ],
  alt: "image",
  isFigure: false,
  textBindings: undefined
};

const avatar: IImg = {
  className: undefined,
  preset: "avatar",
  imgSettings: [
    { src: "https://via.placeholder.com/120x120" }
  ],
  alt: "Avatar Image"
}

export const PresetImg = new Presetter<IImg>(main);
PresetImg.presets.main = main;
PresetImg.presets.avatar = avatar;
