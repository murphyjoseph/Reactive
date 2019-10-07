import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Paragraph } from "../paragraph";
import { IParagraph } from "../paragraph.interface";

describe("<Paragraph />", () => {
  let wrapper: ShallowWrapper<IParagraph>;

  const setup = (passedBindings?: IParagraph) => {
    wrapper = shallow(<Paragraph passedBindings={passedBindings} />);
  };

  test("renders without crashing", () => {
    setup();

    expect(wrapper).toBeTruthy();
  });
});