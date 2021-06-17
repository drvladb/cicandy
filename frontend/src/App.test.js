//import { screen } from "@testing-library/react";
import { render, configure, mount } from "enzyme";
import Adaptor from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

configure({ adapter: new Adaptor() });

describe("basic rendering", () => {
  test("renders and runs", () => {
    render(<App />); // if this doesn't fail, its good
  });
});
