import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Divider } from "../divider";
import { IDivider } from "../divider.interface";

describe("<Divider />", () => {
  let wrapper: ShallowWrapper<IDivider>;

  const setup = (passedBindings?: IDivider) => {
    wrapper = shallow(<Divider passedBindings={passedBindings} />);
  };

  const getRoot = () => {
    const value = wrapper.find("hr");
    expect(value.exists()).toBe(true);
    return value;
  };

  test("renders hr successfully", () => {
    setup();

    const _ = getRoot();
  });
});