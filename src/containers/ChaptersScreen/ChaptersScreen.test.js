import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ChaptersScreen from "./ChaptersScreen";
import { findByTestAttr, testStore } from "../../utils";

configure({ adapter: new Adapter() });

jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true
});

jest.mock("../../../node_modules/react-redux/lib/utils/batch.js", () => ({
  setBatch: jest.fn(),
  getBatch: () => fn => fn()
}));

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(<ChaptersScreen store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("ChaptersScreen", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      ChapterReducer: {
        chapters: [
          {
            id: 1,
            quiz: 2,
            articles: [],
            title: "testTitle",
            description: "testDescription"
          }
        ]
      }
    };
    wrapper = setUp(initialState);
  });

  it("should render the indicator", () => {
    const container = findByTestAttr(wrapper, "chapterContainer");
    expect(container.length).toBe(1);
  });

  it("should render the list", () => {
    const list = findByTestAttr(wrapper, "chapterList");
    expect(list.length).toBe(1);
  });

  it("should render the swipe container", () => {
    const swipe = findByTestAttr(wrapper, "swipeContainer");
    expect(swipe.length).toBe(1);
  });

  it("should render the positive button", () => {
    const button = findByTestAttr(wrapper, "positiveButton");
    expect(button.length).toBe(1);
  });
});
