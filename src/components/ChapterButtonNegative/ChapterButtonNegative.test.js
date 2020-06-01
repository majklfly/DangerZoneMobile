import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ChapterButtonNegative from "./ChapterButtonNegative";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const wrapper = shallow(<ChapterButtonNegative />);
  return wrapper;
};

describe("ChapterButtonNegative", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the button", () => {
    const button = findByTestAttr(wrapper, "buttonContainer");
    expect(button.length).toBe(1);
  });
});
