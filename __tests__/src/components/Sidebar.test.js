import React from "react";
import {shallow} from "enzyme";

import {View, TouchableNativeFeedback} from "react-native";
import Sidebar from "../../../src/components/Sidebar/Sidebar";

test("render Sidebar", () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find(View)).toHaveLength(15);
});
test("render Sidebar TouchableNativeFeedback", () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find(TouchableNativeFeedback)).toHaveLength(5);
});