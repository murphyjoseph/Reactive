import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Container } from "../container";
import { IContainer } from "../container.interface";

describe("<Container />", () => {
  const testLink = "https://wantable.com";
  const testOnClick = jest.fn();

  let wrapper: ShallowWrapper<IContainer>;

  const setup = (passedBindings?: IContainer) => {
    wrapper = shallow(<Container passedBindings={passedBindings} />);
  };

  const getRoot = (type: "a" | "div") => {
    const value = wrapper.find(type);
    expect(value.exists()).toBe(true);
    return value;
  };

  test("renders anchor with href when href is provided", () => {
    setup({ href: testLink });

    const _ = getRoot("a");
    expect(_.prop("href")).toBe(testLink);
  });

  test("renders div without href when href not provided", () => {
    setup();

    const _ = getRoot("div");
    expect(_.prop("href")).toBeUndefined();
  });

  test("renders anchor with href when href and onClick is provided", () => {
    setup({ href: testLink, onClick: testOnClick });

    const _ = getRoot("a");
    expect(_.prop("href")).toBe(testLink);
  });

  test("binds onClick when provided", () => {
    setup({ onClick: testOnClick });

    const _ = getRoot("div");
    expect(_.prop("onClick")).toBeDefined();
  });

  test("binds onClick when provided with href", () => {
    setup({ onClick: testOnClick, href: testLink });

    const _ = getRoot("a");
    expect(_.prop("onClick")).toBeDefined();
  });

  test("triggers bound onClick when clicked", () => {
    setup({ onClick: testOnClick });

    const _ = getRoot("div");
    _.simulate("click");

    expect(testOnClick).toHaveBeenCalled();
  });
});