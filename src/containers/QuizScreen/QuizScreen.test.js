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
  console.log(wrapper.debug());
  return wrapper;
};

describe("QuizScreen", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      reducer: {
        quiz: [{ value: 1 }]
      }
    };
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "quizContainer");
    expect(container.length).toBe(1);
  });
});
