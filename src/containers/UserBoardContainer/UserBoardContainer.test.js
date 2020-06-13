import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserBoardContainer from "./UserBoardContainer";

import { findByTestAttr } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const wrapper = shallow(<UserBoardContainer />);
  return wrapper;
};

describe("UserBoardContainer", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setUp(initialState);
  });
  it("should render the animation container", () => {
    const container = findByTestAttr(wrapper, "animationContainer");
    expect(container.length).toBe(1);
  });
});
