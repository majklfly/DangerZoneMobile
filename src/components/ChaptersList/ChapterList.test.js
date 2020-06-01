import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ChaptersList from "./ChaptersList";

import { findByTestAttr } from "../../utils";

configure({ adapter: new Adapter() });

jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true
});

jest.mock("../../../node_modules/react-redux/lib/utils/batch.js", () => ({
  setBatch: jest.fn(),
  getBatch: () => fn => fn()
}));

const chapters = [
  { id: "1", title: "title1" },
  { id: "2", title: "title2" }
];

const userdata = {
  id: 1,
  chapterdata: [
    { id: 2, chapterTitle: "title1", completed: true },
    { id: 3, chapterTitle: "title3", completed: true }
  ]
};

const setUp = () => {
  const wrapper = mount(
    <ChaptersList chapters={{ chapters }} completedChapters={{ userdata }} />
  );
  return wrapper;
};

describe("ChaptersList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render chapterListContainer", () => {
    const container = findByTestAttr(wrapper, "chapterListContainer");
    expect(container.length).toBe(1);
  });

  it("should render the flatlist", () => {
    const container = findByTestAttr(wrapper, "chaptersFlatlist");
    expect(container.length).toBe(1);
  });

  it("should render the negative button", () => {
    const button = findByTestAttr(wrapper, "negativeButton");
    expect(button.length).toBe(1);
  });

  it("should render the positive button", () => {
    const button = findByTestAttr(wrapper, "positiveButton");
    expect(button.length).toBe(1);
  });
});
