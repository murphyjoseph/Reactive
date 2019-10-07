import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Accordion } from "../accordion";
import { IAccordion } from "../accordion.interface";
import { Paragraph } from "../../paragraph/paragraph";

describe("<Accordion />", () => {
  let wrapper: ShallowWrapper<IAccordion>;

  const setup = (passedBindings?: IAccordion, children?: JSX.Element) => {
    wrapper = shallow(
      <Accordion passedBindings={passedBindings}>
        {children}
      </Accordion>
    );
  };

  test("renders without crashing", () => {
    setup();

    expect(wrapper).toBeTruthy();
  });

  test("renders children", () => {
    const testText = "unique~text";
    setup(undefined,
      <h1>{testText}</h1>
    );

    const _ = wrapper.find("h1");
    expect(_.exists()).toBe(true);
    expect(_.text()).toBe(testText);
  });

  test("renders passed paragraph", () => {
    const contentBar = {
      slot:
        <Paragraph passedBindings={({
          textBindings: [
           { text: "hello there" }
         ]
       })} />
    };
    setup({ contentBar: contentBar });

    const _ = wrapper.find(Paragraph);
    expect(_.exists()).toBe(true);
    expect(_.props().passedBindings).toEqual(contentBar);
  });
});