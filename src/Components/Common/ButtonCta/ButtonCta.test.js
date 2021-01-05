import React from "react";
import ReactDOM from "react-dom";
import ButtonCta from "./ButtonCta";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ButtonCta Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<ButtonCta />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<ButtonCta />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	const props = { tag: "a", children: "Test", className: "test" };

	it("Renders given props", () => {
		const wrapper = shallow(<ButtonCta {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
