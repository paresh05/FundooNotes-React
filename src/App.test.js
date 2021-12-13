
import  Login  from "./pages/Login";
import { shallow } from "enzyme";
import { Button, Grid, TextField } from "@mui/material";

describe("Login Testing", () => {
  test("renders a button sign up", () => {
    const wrapper = shallow(<Login/>);
    console.log( wrapper.debug() );
    wrapper.find("Formik").simulate("click");
    // console.log( wrapper.find(Grid).simulate("click"));
    expect(wrapper.state("redirect")).toBe(false);
    // render(<Props/>);
    // const linkElement = screen.getByText("Hello");
    // expect(linkElement).toBeInTheDocument();
  });
  // test("render a button with text of `increment`", () => {
  //   const wrapper = shallow(<Parent />);
  //   expect(wrapper.find("#increment-btn").text()).toBe("Click me(useRef)");
  // });
  // test("render the initial value of the state in a div", () => {
  //   const wrapper = shallow(<Parent />);
  //   expect(wrapper.find("#counter-value").text()).toBe("Click 0 times");
  // });
  // test("render the click event", () => {
  //   const wrapper = shallow(<Parent />);
  //   wrapper.find("#increment").simulate("click");
  //   expect(wrapper.find("#counter-value").text()).toBe("Click 1 times");
  // });
});

