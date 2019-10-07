import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Btn } from "../btn";
import { IBtn } from "../btn.interface";

describe("<Btn />", () => {
  const testLink = "https://wantable.com";
  const testText = "click me";
  const testOnClick = jest.fn();

  let wrapper: ShallowWrapper<IBtn>;

  const setup = (passedBindings?: IBtn) => {
    wrapper = shallow(<Btn passedBindings={passedBindings} />);
  };

  const getRoot = (type: "a" | "button") => {
    const value = wrapper.find(type)
    expect(value.exists()).toBe(true);
    return value;
  };

  test("renders passed text", () => {
    setup({ text: testText });

    expect(wrapper.text()).toBe(testText);
  });

  test("renders anchor if href is provided ", () => {
    setup({ href: testLink });

    const _ = getRoot("a");
    expect(_.prop("href")).toBe(testLink);
  });

  test("renders as submit button if href is not provided", () => {
    setup();

    const _ = getRoot("button");
    expect(_.prop("type")).toBe("submit");
  });

  test("renders as submit button if href is not provided and onClick is provided", () => {
    setup({ onClick: testOnClick });

    const _ = getRoot("button");
    expect(_.prop("type")).toBe("submit");
  });

  test("binds onClick when provided", () => {
    setup({ onClick: testOnClick });

    const _ = getRoot("button");
    expect(_.prop("onClick")).toBeDefined();
  });

  test("binds onClick and href when provided with both", () => {
    setup({ href: testLink, onClick: testOnClick });

    const _ = getRoot("a");
    expect(_.prop("href")).toBe(testLink);
    expect(_.prop("onClick")).toBeDefined();
  });

  test("triggers bound onClick when clicked", () => {
    setup({ onClick: testOnClick });

    const _ = getRoot("button");
    _.simulate("click");

    expect(testOnClick).toHaveBeenCalled();
  });
});