import { IField } from './field.interface';

interface IPresetField {
  initial: IField,
  select: IField,
  radio: IField,
  checkbox: IField,
  textarea: IField,
  number: IField,
  text: IField,
  tel: IField,
  email: IField,
  password: IField,
  date: IField,
  file: IField,
  zipcode: IField,
  hidden: IField,
  reset: IField,
  range: IField,
  submit: IField
}

export const PresetField: IPresetField = {
  initial: {
    className: undefined,
    kind: "text",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  text: {
    className: undefined,
    kind: "text",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  range: {
    className: undefined,
    kind: "range",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  zipcode: {
    className: undefined,
    kind: "text",
    pattern: "[0-9]*",
    isRequired: false,
    // inputmode doesn't have wide support yet but this could be a future implementation for zipcode
    // inputmode: "numeric",
    // pattern: "^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$",
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  hidden: {
    className: undefined,
    kind: "hidden",
    isRequired: false
  },

  file: {
    className: undefined,
    kind: "reset",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  submit: {
    className: undefined,
    kind: "submit",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  reset: {
    className: undefined,
    kind: "file",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  tel: {
    className: "undefined",
    kind: "tel",
    isRequired: false,
    pattern: "[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}",
    labelPosition: "top",
    labelTextBindings: {
      preset: "label",
      text: "Phone Number (Format: +99(99)9999-9999)"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  email: {
    className: undefined,
    kind: "email",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  password: {
    className: undefined,
    kind: "password",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  date: {
    className: undefined,
    kind: "date",
    isRequired: false,
    labelPosition: "top",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  select: {
    className: undefined,
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
  },

  radio: {
    className: undefined,
    kind: "radio",
    isRequired: false,
    labelPosition: "right",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  checkbox: {
    className: undefined,
    kind: "checkbox",
    isRequired: false,
    labelPosition: "right",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  number: {
    className: undefined,
    kind: "number",
    isRequired: false,
    labelPosition: "left",
    labelTextBindings: {
      preset: "label"
    },
    sublabelTextBindings: {
      preset: "sublabel"
    }
  },

  textarea: {
    className: undefined,
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
}