import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SigninScreen from "./SigninScreen";
import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = () => {
  const store = testStore();
  const wrapper = shallow(<SigninScreen store={store} />)
    .dive()
    .dive();
  return wrapper;
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
