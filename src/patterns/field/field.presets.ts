import { IField } from './field.interface';
import { Presetter } from '../../services/Presetter';

const main: IField = {
  className: undefined,
  preset: "main",
  kind: "text",
  isRequired: false,
  labelPosition: "top",
  labelTextBindings: {
    preset: "label"
  },
  sublabelTextBindings: {
    preset: "sublabel"
  }
};

const select: IField = {
  className: undefined,
  preset: "select",
  kind: "select",
  isRequired: false,
  addEmptyOption: true,
  labelPosition: "left",
  labelTextBindings: {
    preset: "label"
  },
  sublabelTextBindings: {
    preset: "sublabel"
  }
}

const textarea: IField = {
  className: undefined,
  preset: "textarea",
  kind: "textarea",
  isRequired: false,
  addEmptyOption: true,
  labelPosition: "top",
  labelTextBindings: {
    preset: "label"
  },
  sublabelTextBindings: {
    preset: "sublabel"
  }
}

const radio: IField = {
  className: undefined,
  preset: "radio",
  kind: "radio",
  isRequired: false,
  labelPosition: "right",
  labelTextBindings: {
    preset: "label"
  },
  sublabelTextBindings: {
    preset: "sublabel"
  }
}

const checkbox: IField = {
  className: undefined,
  preset: "checkbox",
  kind: "checkbox",
  isRequired: false,
  labelPosition: "right",
  labelTextBindings: {
    preset: "label"
  },
  sublabelTextBindings: {
    preset: "sublabel"
  }
}

export const PresetField = new Presetter<IField>(main);
PresetField.presets.main = main;
PresetField.presets.select = select;
PresetField.presets.radio = radio;
PresetField.presets.checkbox = checkbox;
PresetField.presets.textarea = textarea;