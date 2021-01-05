import React from "react";
import ReactDOM from "react-dom";
import SecurityDetails from "./SecurityDetails";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("SecurityDetails Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<SecurityDetails />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<SecurityDetails />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	const props = { ipo: "2000-01-10", website: "www.xyz.com", Country: "AUS" };

	it("Renders given props", () => {
		const wrapper = shallow(<SecurityDetails {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
