import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignupScreen from "./SignupScreen";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<SignupScreen store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("SignupScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "signupContainer");
    expect(container.length).toBe(1);
  });

  it("should render the image", () => {
    const image = findByTestAttr(wrapper, "signupImage");
    expect(image.length).toBe(1);
  });

  it("should render the form container", () => {
    const container = findByTestAttr(wrapper, "formContainer");
    expect(container.length).toBe(1);
  });

  it("should render the button", () => {
    const button = findByTestAttr(wrapper, "signupButton");
    expect(button.length).toBe(1);
  });
});
