import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FacebookButton from "./FacebookButton";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<FacebookButton store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("FacebookButton", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setUp(initialState);
  });

  it("should render the facebook button", () => {
    const button = findByTestAttr(wrapper, "facebookButton");
    expect(button.length).toBe(1);
  });
});
