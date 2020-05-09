import React from "react";
import { shallow } from "enzyme";
import ChaptersScreen from "./ChaptersScreen";
import { findByTestAttr, testStore } from "../../utils";

const setUp = () => {
  const store = testStore();
  const component = shallow(<ChaptersScreen store={store} />)
    .dive()
    .dive();
  console.log(component.debug());
  return component;
};

describe("ChaptersScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the title", () => {
    const text = findByTestAttr(wrapper, "chapterTitle");
    expect(text.length).toBe(1);
  });
});
