import React from "react";
import ReactDOM from "react-dom";
import Intermodal from "./Intermodal";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Intermodal Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Intermodal />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<Intermodal />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	const props = {
		close: () => {
			return null;
		},
		show: true,
		buttons: [
			{
				tag: "a",
				className: null,
				href: "/",
				children: "Test Button Content",
			},
		],
		children: "Test Content",
	};

	it("Renders given props", () => {
		const wrapper = shallow(<Intermodal {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
