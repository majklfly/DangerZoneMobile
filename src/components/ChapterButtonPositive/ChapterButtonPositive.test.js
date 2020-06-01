import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ChapterButtonPositive from "./ChapterButtonPositive";

import { findByTestAttr } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const wrapper = shallow(<ChapterButtonPositive />);
  return wrapper;
};

describe("ChapterButtonPositive", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the positive button", () => {
    const button = findByTestAttr(wrapper, "chapterButtonPositive");
    expect(button.length).toBe(1);
  });
});
