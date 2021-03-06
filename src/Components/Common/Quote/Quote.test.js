import React from "react";
import ReactDOM from "react-dom";
import Quote from "./Quote";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Quote Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Quote />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<Quote />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	const props = {
		exchange: "NYSE",
		current: "$3.22",
		currency: "USD",
		change: "-1.2",
		changePct: "-.02%",
	};

	it("Renders given props", () => {
		const wrapper = shallow(<Quote {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
