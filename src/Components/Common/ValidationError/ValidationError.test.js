import React from "react";
import ReactDOM from "react-dom";
import ValidationError from "./ValidationError";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ValidationError Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<ValidationError />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<ValidationError />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Renders given props", () => {
		const wrapper = shallow(<ValidationError>Error</ValidationError>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
