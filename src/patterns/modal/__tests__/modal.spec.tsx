import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Modal } from "../modal";
import { IModal } from "../modal.interface";

describe("<Modal />", () => {
  let wrapper: ShallowWrapper<IModal>;

  const setup = (passedBindings?: IModal) => {
    wrapper = shallow(<Modal passedBindings={passedBindings} />);
  };

  test("renders without crashing", () => {
    setup();

    expect(wrapper).toBeTruthy();
  });
});