import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuizResultSlide from "./QuizResultSlide";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<QuizResultSlide store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("QuizResultSlidePositive", () => {
  let wrapper;
  beforeEach(() => {
    let initialState = {
      QuizReducer: {
        correctAnswers: 4
      }
    };
    wrapper = setUp(initialState);
  });

  it("should render the main container positive", () => {
    const container = findByTestAttr(wrapper, "positiveContainer");
    expect(container.length).toBe(1);
  });

  it("should render the Lottie animation", () => {
    const animation = findByTestAttr(wrapper, "positiveAnimation");
    expect(animation.length).toBe(1);
  });

  it("should render the userBoard", () => {
    const board = findByTestAttr(wrapper, "userBoard");
    expect(board.length).toBe(1);
  });
});

describe("QuizResultSlideNegative", () => {
  let wrapper;
  beforeEach(() => {
    let initialState = {
      QuizReducer: {
        correctAnswers: 2
      }
    };
    wrapper = setUp(initialState);
  });

  it("should render the container negative", () => {
    const container = findByTestAttr(wrapper, "negativeContainer");
    expect(container.length).toBe(1);
  });

  it("should render the negative animation", () => {
    const animation = findByTestAttr(wrapper, "negativeAnimation");
    expect(animation.length).toBe(1);
  });

  it("should render the userBoard", () => {
    const board = findByTestAttr(wrapper, "userBoard");
    expect(board.length).toBe(1);
  });
});
