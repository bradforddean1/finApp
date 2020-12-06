import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Nav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Nav Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<NavBar />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it.skip("Renders the Default State", () => {
		const wrapper = shallow(<NavBar />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it.skip("Renders given props", () => {
		const wrapper = shallow(<NavBar {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
