import React from "react";
import ReactDOM from "react-dom";
import SplashPage from "./SplashPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";

describe("SplashPage Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<BrowserRouter>
				<SplashPage />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<SplashPage />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
