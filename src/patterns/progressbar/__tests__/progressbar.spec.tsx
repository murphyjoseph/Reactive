import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Progressbar } from "../progressbar";
import { IProgressbar } from "../ressbar.interface";

describe("<Progressbar />", () => {
  let wrapper: ShallowWrapper<IProgressbar>;

  const setup = (passedBindings?: IProgressbar) => {
    wrapper = shallow(<Progressbar passedBindings={passedBindings} />);
  };

  test("renders without crashing", () => {
    setup();

    expect(wrapper).toBeTruthy();
  });
});