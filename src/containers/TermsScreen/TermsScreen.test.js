import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TermsScreen from "./TermsScreen";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<TermsScreen />);
  return wrapper;
};

describe("TermsScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container for text", () => {
    const container = findByTestAttr(wrapper, "termsContainer");
    expect(container.length).toBe(1);
  });
});
