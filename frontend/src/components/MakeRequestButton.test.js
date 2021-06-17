import { configure, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Adaptor from "@wojtekmaj/enzyme-adapter-react-17";
import MockAdapter from "axios-mock-adapter";
import { axios } from "config";
import MakeRequestButton from "./MakeRequestButton";

configure({ adapter: new Adaptor() });
const mock = new MockAdapter(axios);

describe("Button & Fetch Correctly", () => {
  test("button exists", () => {
    const wrapper = mount(<MakeRequestButton />);
    const elem = wrapper.find("button");
    expect(elem.length).toBe(1);
  });

  test("no text as default state", () => {
    const wrapper = mount(<MakeRequestButton />);
    const elem = wrapper.find("p");
    expect(elem.text()).toBe("");
  });

  test("function correctly fetches information", async () => {
    mock.onGet("/test").reply(200, { hello: "world" });
    const wrapper = mount(<MakeRequestButton />);
    await act(async () => {
      wrapper.find("button").simulate("click");
    });
    //const elem = wrapper.find("h1");
    //expect(elem.text()).toBe("Press the button");
    // expect a fetch call
    expect(mock.history.get.length).toBe(1);
    // expect the text to change to "world"
    const elem = wrapper.find("p");
    expect(elem.text()).toBe("world");
  });
});
