import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Img } from "../img";
import { IImg } from "../img.interface";
import { IImageSource } from "../../../interfaces/imageSource.interface";

describe("<Img />", () => {
  const testImages = [
    { src: "https://wantable.com/do_i_look_like_i_know_what_a_jpeg_is.jpg" } as IImageSource,
    { src: "https://wantable.com/asdfasdf.jpg" } as IImageSource,
    { src: "https://wantable.com/propane.jpg" } as IImageSource,
  ];

  let wrapper: ShallowWrapper<IImg>;

  const setup = (passedBindings?: IImg) => {
    wrapper = shallow(<Img passedBindings={passedBindings} />);
  };

  const getRoot = () => {
    const value = wrapper.find("picture");
    expect(value.exists()).toBe(true);
    return value;
  };

  // test("renders provided image", () => {
  //   setup({ imgSettings: testImages[0] });

  //   const picture = getRoot();
  //   const _ = picture.find("img");
  //   expect(_.length).toBe(1);
  //   expect(_.prop("src")).toBe(testImages[0].src);
  // });

  test("renders first image when mulitple provided", () => {
    setup({ imgSettings: testImages });

    const picture = getRoot();
    const _ = picture.find("img");
    expect(_.length).toBe(1);
    expect(_.prop("src")).toBe(testImages[0].src);
  });
});