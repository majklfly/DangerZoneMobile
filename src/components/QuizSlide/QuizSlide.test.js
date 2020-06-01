import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuizSlide from "./QuizSlide";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true
});

const item = {
  label: "testLabel",
  answers: ["answer1"]
};

const setUp = () => {
  const wrapper = mount(<QuizSlide item={{ item }} />);
  return wrapper;
};

describe("QuizSlide", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "quizSlideContainer");
    expect(container.length).toBe(1);
  });

  it("should render the flatlist", () => {
    const flatlist = findByTestAttr(wrapper, "quizSlideFlatList");
    expect(flatlist.length).toBe(1);
  });

  it("should render the answer button", () => {
    const button = findByTestAttr(wrapper, "answerButton");
    expect(button.length).toBe(4);
  });
});
