import React from "react";
import ReactDOM from "react-dom";
import ButtonAdd from "./ButtonAdd";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ButtonAdd Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<ButtonAdd />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<ButtonAdd />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
