import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArticleSlider from "./ArticleSlider";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const wrapper = shallow(<ArticleSlider data={{ articles: [] }} />);
  return wrapper;
};

describe("ArticleSlider", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the main container", () => {
    const container = findByTestAttr(wrapper, "articleSliderContainer");
    expect(container.length).toBe(1);
  });

  it("should render the flat list", () => {
    const flatlist = findByTestAttr(wrapper, "articleSliderFlatlist");
    expect(flatlist.length).toBe(1);
  });
});
