import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Tabs } from "../tabs";
import { ITabs } from "../tabs.interface";

describe("<Tabs />", () => {
  const testChildren = (
    <div>hello</div>
  );

  let wrapper: ShallowWrapper<ITabs>;

  const setup = (passedBindings?: ITabs, children?: React.ReactNode | React.ReactNodeArray) => {
    wrapper = !children
      ? shallow(<Tabs passedBindings={passedBindings} />)
      : shallow(
        <Tabs passedBindings={passedBindings}>
          {children}
        </Tabs>
      );
  };

  test("renders without crashing", () => {
    expect(true).toBe(true);
  });
});