import React from "react";
import ReactDOM from "react-dom";
import ButtonX from "./ButtonX";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ButtonX Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<ButtonX />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<ButtonX />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
