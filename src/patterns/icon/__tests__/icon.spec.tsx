import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Icon } from "../icon";
import { IIcon } from "../icon.interface";

describe("<Icon />", () => {
  const testLink = "https://wantable.com";
  const testOnClick = jest.fn();

  let wrapper: ShallowWrapper<IIcon>;

  const setup = (passedBindings?: IIcon) => {
    wrapper = shallow(<Icon passedBindings={passedBindings} />);
  };

  const getRoot = (type: "a" | "div") => {
    const value = wrapper.find(type);
    expect(value.exists()).toBe(true);
    return value;
  }

  test("wraps icon in anchor with link if href provided", () => {
    setup({ href: testLink });

    const _ = getRoot("a");
    expect(_.prop("href")).toBe(testLink);
  });

  test("wraps icon in div if href is not provided", () => {
    setup();

    const _ = getRoot("div");
  });

//  test("binds onClick to icon when onClick is provided", () => {
//    setup({ onClick: testOnClick });
//
//    const _ = getRoot("div").childAt(0);
//    expect(_.prop("onClick")).toBe(testOnClick);
//  });
});
