import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArticleScreen from "./ArticleScreen";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ArticleScreen store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("ArticleScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "articleContainer");
    expect(container.length).toBe(1);
  });

  it("should render the slider", () => {
    const slider = findByTestAttr(wrapper, "articleSlider");
    expect(slider.length).toBe(1);
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "swipeContainer");
    expect(container.length).toBe(1);
  });
});
