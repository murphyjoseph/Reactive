import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Text } from "../text";
import { IText } from "../text.interface";

const testLink = "https://wantable.com";

describe("<Text />", () => {
  let wrapper: ShallowWrapper<IText>;

  const setup = (passedBindings?: IText) => {
    wrapper = shallow(<Text passedBindings={passedBindings} />);
  };

  test("renders the passed type", () => {
    const testType = "h3";
    setup({
      kind: testType
    });

    expect(wrapper.find(testType).exists()).toBe(true);
  });

  test("renders the passed text", () => {
    const testType = "h1";
    const testText = "test value";
    setup({
      kind: testType,
      text: testText
    });

    expect(wrapper.find(testType).text()).toBe(testText);
  });

  test("wraps text in link when href provided", () => {
    const text = "ping";
    setup({ kind: "h1", href: testLink, text: text });

    const _ = () => wrapper.find("a");
    expect(_().prop("href")).toBe(testLink);
    expect(_().childAt(0).text()).toBe(text);
  });

  test("does not double nest anchors when type is anchor and href is provided", () => {
    const text = "ping";
    setup({ kind: "a", href: testLink, text: text });

    const _ = () => wrapper.find("a");
    expect(_().length).toBe(1);
    expect(_().prop("href")).toBe(testLink);
    expect(_().text()).toBe(text);
  });

  test("does not render if condition is false", () => {
    const condition = false;
    setup({ kind: "h1", text: "irrelevant", condition: condition });

    // this only works if component returns null
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  test("renders when condition is true", () => {
    const condition = true;
    setup({ kind: "h1", text: "irrelevant", condition: condition });

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  // klassinterpreter?
  // presets?
});
