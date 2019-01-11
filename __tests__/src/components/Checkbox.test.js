import React from "react";
import {shallow} from "enzyme";

import {View} from "react-native";
import CheckBox from "../../../src/components/Checkbox";

test("Componet of Checkbox", () => {
    const wrapper = shallow(<CheckBox />);
    expect(wrapper.find(View)).toHaveLength(1);
});
