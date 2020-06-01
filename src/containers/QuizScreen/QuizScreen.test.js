import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuizScreen from "./QuizScreen";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<QuizScreen store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("QuizScreen", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      QuizReducer: {
        quiz: [{ value: 1 }]
      }
    };
    wrapper = setUp(initialState);
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "quizContainer");
    expect(container.length).toBe(1);
  });

  it("should render the slider", () => {
    const slider = findByTestAttr(wrapper, "quizSlider");
    expect(slider.length).toBe(1);
  });

  it("should render the swipe", () => {
    const swipe = findByTestAttr(wrapper, "quizSwipe");
    expect(swipe.length).toBe(1);
  });
});
