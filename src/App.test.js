import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import {configure, shallow} from "enzyme";

describe("testing", ()=>{
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("First");
    expect(linkElement).toBeInTheDocument();
  });
})

