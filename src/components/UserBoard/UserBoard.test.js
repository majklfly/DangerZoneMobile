import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserBoard from "./UserBoard";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<UserBoard store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("UserBoard", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      userDataReducer: {
        userdata: {
          firstName: "testFirstName"
        }
      }
    };

    wrapper = setUp(initialState);
  });

  it("should render the main container", () => {
    const container = findByTestAttr(wrapper, "mainContainer");
    expect(container.length).toBe(1);
  });

  it("should render the welcome text", () => {
    const text = findByTestAttr(wrapper, "userBoardText");
    expect(text.length).toBe(1);
  });

  it("should render the progress bar", () => {
    const bar = findByTestAttr(wrapper, "progressBar");
    expect(bar.length).toBe(1);
  });

  it("should render the button container", () => {
    const container = findByTestAttr(wrapper, "buttonContainer");
    expect(container.length).toBe(1);
  });
});
