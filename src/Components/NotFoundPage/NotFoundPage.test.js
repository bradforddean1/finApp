import React from "react";
import ReactDOM from "react-dom";
import NotFoundPage from "./NotFoundPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("NotFoundPage Component", () => {
	it("Renders", () => {
		const div = document.createElement("div");
		ReactDOM.render(<NotFoundPage />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Renders the Default State", () => {
		const wrapper = shallow(<NotFoundPage />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
