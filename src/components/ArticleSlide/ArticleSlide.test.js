import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArticleSlide from "./ArticleSlide";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const wrapper = shallow(<ArticleSlide item={{ item: "Text1" }} />);
  return wrapper;
};

describe("ArticleSlide", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the slide container", () => {
    const container = findByTestAttr(wrapper, "slideContainer");
    expect(container.length).toBe(1);
  });

  it("should render the title", () => {
    const title = findByTestAttr(wrapper, "slideTitle");
    expect(title.length).toBe(1);
  });

  it("should render the content", () => {
    const content = findByTestAttr(wrapper, "slideContent");
    expect(content.length).toBe(1);
  });
});
