import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Panel } from "../panel";
import { IPanel } from "../panel.interface";
import { Container } from "../../container/container";
import { Portal } from "../../portal/portal";
import { IContainer } from "../../container/container.interface";
import { IPattern } from "../../../interfaces/pattern.interface";

describe("<Panel />", () => {
  let wrapper: ShallowWrapper<IPanel>;

  const setup = (passedBindings?: IPanel) => {
    wrapper = shallow(<Panel passedBindings={passedBindings} />);
  };

  const getTriggerRoot = () => {
    const value = wrapper.find(Container);
    expect(value.exists()).toBe(true);
    return value;
  };

  const getPassedBindings = <T extends IPattern>(wrapper: ShallowWrapper) =>
    (wrapper.props() as { passedBindings: IPattern }).passedBindings as T || {};

  const panel: IPanel = {
    isPortal: false,
    location: "top",
    size: "size4",
    trigger: {
      slot: <h1>Trigger</h1>
    },
    contentArea: {
      slot: <h2>Content Area</h2>
    },
    contentBar: {
      slot: <h3>Content Bar</h3>
    }
  }

  test("renders trigger slot by default", () => {
    setup(panel);
    const _ = getTriggerRoot().dive();
    expect(_.find("h1").exists()).toBe(true);
  });

  test("does not render content bar slot by default", () => {
    setup(panel);
    expect(wrapper.find("h2").exists()).toBe(false);
  });

  test("does not render content area slot by default", () => {
    setup(panel);
    expect(wrapper.find("h3").exists()).toBe(false);
  });
});