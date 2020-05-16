import { configure } from "enzyme";
import Adapter from "enzyme-adaper-react-16";

configure({
  adapter: new Adapter(),
});

describe("<App />", () => {
  it("Should render 3 characters in light side", () => {});
});
