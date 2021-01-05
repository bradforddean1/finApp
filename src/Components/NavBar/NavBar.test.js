import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";

describe("Nav Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<NavBar />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
