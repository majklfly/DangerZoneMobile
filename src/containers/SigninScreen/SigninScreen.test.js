import React from "react";
import { shallow } from "enzyme";
import SigninScreen from "./SigninScreen";
import { findByTestAttr, testStore } from "../../utils";

const setUp = () => {
  const store = testStore();
  const wrapper = shallow(<SigninScreen store={store} />)
    .dive()
    .dive();
  return wrappers;
};

describe("SigninScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the DangerZone logo", () => {
    const image = findByTestAttr(wrapper, "logo");
    expect(image.length).toBe(1);
  });
});
