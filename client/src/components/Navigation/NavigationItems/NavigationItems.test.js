import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<NavigationItems />);
	});
	it("should render three <NavigationItem />", () => {
		wrapper.setProps({ clicked: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});
});
