import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Profile from "./Profile";

import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

const userdata = {
  userdata: {
    username: "testusername",
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    company: "company",
    position: "position",
    country: "country"
  }
};

const setUp = () => {
  const wrapper = shallow(<Profile {...userdata} />);
  return wrapper;
};

describe("Profile", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the main container", () => {
    const container = findByTestAttr(wrapper, "mainContainer");
    expect(container.length).toBe(1);
  });

  it("should render the title container", () => {
    const container = findByTestAttr(wrapper, "titleContainer");
    expect(container.length).toBe(1);
  });

  it("should render the text container", () => {
    const container = findByTestAttr(wrapper, "textContainer");
    expect(container.length).toBe(1);
  });

  it("should render the icons container", () => {
    const container = findByTestAttr(wrapper, "iconsContainer");
    expect(container.length).toBe(1);
  });

  it("should render the modal for edit profile", () => {
    const modal = findByTestAttr(wrapper, "modalEditForm");
    expect(modal.length).toBe(1);
  });
});
