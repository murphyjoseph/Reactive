import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Portal } from "../portal";
import { IPortal } from "../al.interface";

describe("<Portal />", () => {
  let wrapper: ShallowWrapper<IPortal>;

  const setup = (passedBindings?: IPortal) => {
    wrapper = shallow(<Portal passedBindings={passedBindings} />);
  };

  test("renders without crashing", () => {
    setup();

    expect(wrapper).toBeTruthy();
  });
});