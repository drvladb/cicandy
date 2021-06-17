import { configure, mount } from "enzyme";
import Header from "./Header";
import Adaptor from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adaptor() });

describe("Header Element Renders Correctly", () => {
  test("h1 exists", () => {
    const wrapper = mount(<Header />);
    const elem = wrapper.find("h1");
    expect(elem.length).toBe(1);
  });

  test("renders 'Press the button' text", () => {
    const wrapper = mount(<Header />);
    const elem = wrapper.find("h1");
    expect(elem.text()).toBe("Press the button");
  });

  test("'Press the button' font size correct", () => {
    const wrapper = mount(<Header />);
    const elem = wrapper.find("h1").at(0);

    expect(
      getComputedStyle(elem.getDOMNode()).getPropertyValue("font-size")
    ).toBe("2em");
  });
});
