import React from "react";
import ReactDOM from "react-dom";
import ProfileHeader from "./ProfileHeader";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ProfileHeader Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<ProfileHeader />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it.skip("Renders the Default State", () => {
		const wrapper = shallow(<ProfileHeader />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it.skip("Renders given props", () => {
		const wrapper = shallow(<ProfileHeader {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
