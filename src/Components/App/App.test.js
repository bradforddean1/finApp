import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";

describe("App Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

	it.skip("Renders the Default State", () => {
		const wrapper = shallow(<App />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it.skip("Renders given props", () => {
		const wrapper = shallow(<App {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
