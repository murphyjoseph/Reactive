import _remove from 'lodash/remove';
import styles from "../styles/application-styles.module.scss";
import { capitalizeFirst } from '../utilities/capitalizeFirst';
import { IStylesMaxWidth } from '../interfaces/styles.interface';
import _each from 'lodash/each';
import { utMaxWidthSize2, utMarginAllSize4 } from '../styles/application-styles.module.scss';

const Styles = styles as { [key: string]: string };

export class KlassInterpreter {

  bindings:  any;
  klasses: string[] = [];

  constructor(bindings: any) {
    this.bindings = bindings;
    this.addKlasses();
  }

  addKlass(newKlass: string) {
    this.klasses.push(newKlass)
  }

  removeKlass(killKlass: string) {
    _remove(this.klasses, function (n: string) {
      return n === killKlass;
    });
  }

  clearKlasses() {
    this.klasses = [];
  }

  clearAndUpdateKlasses() {
    this.clearKlasses();
    this.addKlasses();
  }

  getKlasses() {
    return this.klasses;
  }

  addKlasses() {
    // GRID CONCATENATION
    if (!!this.bindings.gridType) {
      if (this.bindings.gridType === "wrapper") {
        const gridDisplay = capitalizeFirst(this.bindings.gridType)
        this.addKlass(
          Styles[`st${gridDisplay}`]
        )
      } else {
        this.bindings.gridColumns.forEach((column: any) => {
          const columnSize = capitalizeFirst(column.size)
          this.addKlass(
            Styles[`stFlexCol${columnSize}`]
          )
        });
      }
    }
    // MAXWIDTH CONCATENATION
    if (!!this.bindings.maxWidth) {
      if (Array.isArray(this.bindings.maxWidth)) {
        this.bindings.maxWidth.forEach((maxWidth: any) => {
          const size = `-${maxWidth.size}`
          const breakpointName = !!maxWidth.breakpointName ? `-${maxWidth.breakpointName}` : ""
          const breakpointDirection = !!maxWidth.breakpointDirection ? `-${maxWidth.breakpointDirection}` : ""
          this.addKlass(
            Styles[`ut-max-width${size}${breakpointDirection}${breakpointName}`]
          )
        });
      } else {
        const size = `-${this.bindings.maxWidth.size}`
        const breakpointName = `-${this.bindings.maxWidth.breakpointName}`
        const breakpointDirection = `-${this.bindings.maxWidth.breakpointDirection}`
        this.addKlass(
          Styles[`ut-max-width${size}${breakpointDirection}${breakpointName}`]
        )
      }
    }
    // WHITE-SPACE CONCATENTATION
    if (!!this.bindings.whiteSpace) {
      this.addKlass(
        Styles[`ut-white-space-${this.bindings.whiteSpace}`]
      )
    }
    // DISPLAY CONCATENATION
    if (!!this.bindings.display) {
      this.addKlass(
        Styles[`ut-display-${this.bindings.display}`]
      )
    }
    // TEXT ALIGNMENT CONCATENATION
    if (!!this.bindings.textAlignment) {
      this.addKlass(
        Styles[`ut-align-text-${this.bindings.textAlignment}`]
      )
    }
    // ADD CLICKER IF EVENT IS ATTACHED TO PATTERN
    if (!!this.bindings.onClick) {
      this.addKlass(
        Styles.utClickPointer
      );
    }
    // ROUNDED BORDER/BACKGROUND CONCANTINATION
    if (!!this.bindings.isRounded) {
      this.addKlass(
        Styles.utRounded
      );
    }
    if (!!this.bindings.isRoundedFull) {
      this.addKlass(
        Styles.utRoundedFull
      );
    }
    // STROKE COLOR CONCATENATION
    if (!!this.bindings.colorStroke) {
      this.addKlass(
        Styles[`mo-color-stroke-${this.bindings.colorStroke}`]
      );
    }
    // FILL COLOR CONCATENATION
    if (!!this.bindings.colorFill) {
      this.addKlass(
        Styles[`mo-color-fill-${this.bindings.colorFill}`]
      );
    }
    // BACKGROUND COLOR CONCATENATION
    if (!!this.bindings.colorBackground) {
      this.addKlass(
        Styles[`mo-color-bg-${this.bindings.colorBackground}`]
      );
    }
    // TEXT COLOR CONCATENATION
    if (!!this.bindings.colorText) {
      this.addKlass(
        Styles[`mo-color-text-${this.bindings.colorText}`]
      );
    }
    // BORDER CONCATENATION
    if (!!this.bindings.border) {
      if (!!this.bindings.border.color && !!this.bindings.border.size && !!this.bindings.border.direction) {
        const size = `-${this.bindings.border.size}`;
        const direction = `-${this.bindings.border.direction}`;
        const color = `-${this.bindings.border.color}`;
        this.addKlass(
          Styles[`mo-color-border${direction}${color}${size}`]
        );
      } else {
        console.warn("No size, color, and or direction was set on border object.");
      }
    }
    // POSITIONING CONCATENATION
    if(!!this.bindings.position) {
      if(!!this.bindings.position.type && !!this.bindings.position.direction || !!this.bindings.position.direction) {
        const direction = !!this.bindings.position.direction ? `-${this.bindings.position.direction}`: "";
        const type = !!this.bindings.position.type ? `-${this.bindings.position.type}`: "";
        const size = !!this.bindings.position.size ? `-${this.bindings.position.size}`: "";
        const sizeType = !!this.bindings.position.sizeType ? `-${this.bindings.position.sizeType}`: "";
        if (!direction && !type)
          console.warn("A minimum of direction and type must be defined for adding position.");
        if (!!size && !sizeType || !size && !!sizeType)
          console.warn("You must include both sizeType and size or neither for adding position.");
        this.addKlass(
          Styles[`ut-position${type}${direction}${sizeType}${size}`]
        );
      }
    }
    // SPACING CONCATENATION
    if (!!this.bindings.padding) {
      if (Array.isArray(this.bindings.padding)) {
        this.bindings.padding.forEach((padding: any) => {
          const direction = `-${padding.direction}`;
          const size = `-${padding.size}`;
          const breakpointName = !!padding.breakpointName ? `-${padding.breakpointName}` : "";
          const breakpointDirection = !!padding.breakpointDirection ? `-${padding.breakpointDirection}` : "";
          this.addKlass(
            Styles[`ut-padding${direction}${size}${breakpointDirection}${breakpointName}`]
          )
        });
      } else {
        const padding = this.bindings.padding
        const direction = `-${padding.direction}`;
        const size = `-${padding.size}`;
        const breakpointName = !!padding.breakpointName ? `-${padding.breakpointName}` : ""
        const breakpointDirection = !!padding.breakpointDirection ? `-${padding.breakpointDirection}` : ""
        this.addKlass(
          Styles[`ut-padding${direction}${size}${breakpointDirection}${breakpointName}`]
        );
      }
    }
    if (!!this.bindings.margin) {
      if (Array.isArray(this.bindings.margin)) {
        this.bindings.margin.forEach((margin: any) => {
          const direction = `-${margin.direction}`;
          const size = `-${margin.size}`;
          const breakpointName = !!margin.breakpointName ? `-${margin.breakpointName}` : "";
          const breakpointDirection = !!margin.breakpointDirection ? `-${margin.breakpointDirection}` : "";
          this.addKlass(
            Styles[`ut-margin${direction}${size}${breakpointDirection}${breakpointName}`]
          )
        });
      } else {
        const margin = this.bindings.margin
        const direction = `-${margin.direction}`;
        const size = `-${margin.size}`;
        const breakpointName = !!margin.breakpointName ? `-${margin.breakpointName}` : ""
        const breakpointDirection = !!margin.breakpointDirection ? `-${margin.breakpointDirection}` : ""
        this.addKlass(
          Styles[`ut-margin${direction}${size}${breakpointDirection}${breakpointName}`]
        );
      }
    }
    // OVERFLOW CONCATENATION
    if (!!this.bindings.overflow) {
      if (!this.bindings.overflow.direction && !this.bindings.overflow.type) {
        console.warn("Please supply both overflow direction and overflow type values.");
        return;
      }
      const direction = `-${this.bindings.overflow.direction}`;
      const type = `-${this.bindings.overflow.type}`;
      this.addKlass(
        Styles[`ut-overflow${direction}${type}`]
      )
    }
    // SHADOW CONCATENATION
    if (!!this.bindings.shadow) {
      if (!!this.bindings.shadow.size && !!this.bindings.shadow.direction) {
        const direction = `-${this.bindings.shadow.direction}`;
        const size = `-${this.bindings.shadow.size}`;
        this.addKlass(
          Styles[`ut-shadow${direction}${size}`]
        );
      }
    }
  }

}
