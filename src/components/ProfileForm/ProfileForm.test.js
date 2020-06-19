import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ProfileForm from "./ProfileForm";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ProfileForm store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("ProfileForm", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      userDataReducer: {
        userdata: {}
      },
      AuthReducer: {
        token: "abcde"
      }
    };
    wrapper = setUp(initialState);
  });

  it("should render the form container", () => {
    const container = findByTestAttr(wrapper, "formContainer");
    expect(container.length).toBe(1);
  });

  it("should render the title container", () => {
    const container = findByTestAttr(wrapper, "titleContainer");
    expect(container.length).toBe(1);
  });
});
