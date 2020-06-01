import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuizSlider from "./QuizSlider";

import { findByTestAttr } from "../../utils";

configure({ adapter: new Adapter() });

jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true
});
jest.mock("../../../node_modules/react-redux/lib/utils/batch.js", () => ({
  setBatch: jest.fn(),
  getBatch: () => fn => fn()
}));

const questions = [];

const setUp = () => {
  const wrapper = mount(<QuizSlider data={{ questions }} />);
  console.log(wrapper.debug());
  return wrapper;
};

describe("QuizSlider", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "quizSliderContainer");
    expect(container.length).toBe(1);
  });

  it("should render the flatlist", () => {
    const flatlist = findByTestAttr(wrapper, "quizSliderFlatlist");
    expect(flatlist.length).toBe(1);
  });
});
