import React from "react";
import {shallow} from "enzyme";

import {Switch} from "react-native";
import ToggleSwitch from "../../../src/components/ToggleSwitch";

test("Main SnapShot", () => {
    const wrapper = shallow(<ToggleSwitch />);
    expect(wrapper.find(Switch)).toHaveLength(1);
});
