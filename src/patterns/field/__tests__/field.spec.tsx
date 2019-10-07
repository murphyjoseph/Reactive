import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Field } from "../field";
import { IField } from "../field.interface";
import { Text } from "../../text/text"
import { IOption } from "../../../interfaces/option.interface";
import { IText } from "../../text/text.interface";

describe("<Field />", () => {
  const label = "I'm a label!";
  const subLabel = "(I'm a sublabel!)";
  const options = [
    { id: "1", name: "one" } as IOption,
    { id: "2", name: "two", isDisabled: true } as IOption,
    { id: "3", name: "three", isDisabled: false } as IOption,
  ];

  let wrapper: ShallowWrapper<IField>;

  const setup = (passedBindings?: IField) => {
    wrapper = shallow(<Field passedBindings={passedBindings} />);
  };

  const getRoot = () => {
    const value = wrapper.find("label");
    expect(value.exists()).toBe(true);
    return value;
  };

  const getInput = (type: "input" | "select" | "textarea") => {
    const value = getRoot().find(type);
    expect(value.exists()).toBe(true);
    return value;
  };

  const expectOptionValidity = (select: ShallowWrapper, option: IOption, index: number) => {
    const _ = select.find("option").at(index);
    expect(_.exists()).toBe(true);
    expect(_.prop("value")).toBe(option.id);
    expect(_.text()).toBe(option.name);
    expect(_.prop("disabled")).toBe(option.isDisabled);
  };

  test("renders label as Text when provided", () => {
    setup({ labelTextBindings: { text: label } });

    const _ = getRoot().find(Text).first();
    expect((_.prop("passedBindings") as IText).text).toBe(label);
  });

  test("renders sublabel second when provided without label", () => {
    setup({ sublabelTextBindings: { text: subLabel } });

    const _ = getRoot().find(Text).at(1);

    expect((_.prop("passedBindings") as IText).text).toBe(subLabel);
  });

  test("renders label when label and sublabel are provided", () => {
    setup({
      labelTextBindings: { text: label },
      sublabelTextBindings: { text: subLabel }
    });

    const _ = getRoot().find(Text).first();

    expect(_.type()).toBe(Text);
    expect((_.prop("passedBindings") as IText).text).toBe(label);
  });

  test("renders label when label and sublabel are provided", () => {
    setup({
      labelTextBindings: { text: label },
      sublabelTextBindings: { text: subLabel }
    });

    const _ = getRoot().find(Text).at(1);
    expect(_.type()).toBe(Text);
    expect((_.prop("passedBindings") as IText).text).toBe(subLabel);
  });

  test("renders as text input by default", () => {
    setup();

    const _ = getRoot();
    expect(_.find("input").exists()).toBe(true);
  });

  test("renders as select when type is select", () => {
    setup({ kind: "select" });

    const _ = getRoot();
    expect(_.find("select").exists()).toBe(true);
  });

  test("renders as textarea when type is textarea", () => {
    setup({ kind: "textarea" });

    const _ = getRoot();
    expect(_.find("textarea").exists()).toBe(true);
  });

  test("renders all options and empty by default", () => {
    setup({ kind: "select", options: options });
    const expectedOptionsLength = options.length + 1;

    const _ = getInput("select");

    expect(_.find("option").length).toBe(expectedOptionsLength);
  });

  test("renders only options when addEmptyOption is false", () => {
    setup({
      kind: "select",
      options: options,
      addEmptyOption: false
    });

    const _ = getInput("select");
    expect(_.find("option").length).toBe(options.length);
  });

  test("renders each option correctly in provided order without empty option", () => {
    setup({
      kind: "select",
      options: options,
      addEmptyOption: false
    });

    const select = getInput("select");
    options.forEach((option, index) => expectOptionValidity(select, option, index));
  });

  test("renders each option correctly in provided order with empty option first", () => {
    setup({ kind: "select", options: options });

    const select = getInput("select");
    options.forEach((option, index) => expectOptionValidity(select, option, index + 1));
  });

  test("renders empty option correctly first", () => {
    setup({ kind: "select", options: options });

    const _ = getInput("select").childAt(0);
    expect(_.type()).toBe("option");
    expect(_.text().trim()).toBe("");
    expect(_.prop("value")).toBe(0);
  });
});