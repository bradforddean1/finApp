import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Quote Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Profile />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it.skip("Renders the Default State", () => {
		const wrapper = shallow(<Profile />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it.skip("Renders given props", () => {
		const wrapper = shallow(<Profile {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
