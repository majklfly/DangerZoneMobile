import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuizSlider from "./QuizSlider";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true
});
jest.mock("../../../node_modules/react-redux/lib/utils/batch.js", () => ({
  setBatch: jest.fn(),
  getBatch: () => fn => fn()
}));

const questions = [];

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(<QuizSlider store={store} data={{ questions }} />);
  return wrapper;
};

describe("QuizSlider", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setUp(initialState);
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
