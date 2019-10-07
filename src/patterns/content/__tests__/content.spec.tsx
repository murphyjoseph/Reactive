import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Content } from "../content";
import { IContent } from "../content.interface";

describe("<Content />", () => {
  let wrapper: ShallowWrapper<IContent>;

  const setup = (passedBindings?: IContent) => {
    wrapper = shallow(<Content passedBindings={passedBindings} />);
  };

  test("renders without crashing", () => {
    setup();

    expect(wrapper).toBeTruthy();
  });
});