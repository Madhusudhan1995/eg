import React from "react";
import {shallow} from "enzyme";

import {View} from "react-native";
import ListPicker from "../../../src/components/ListPicker";

test("Componet of ListPicker", () => {
    const wrapper = shallow(<ListPicker />);
    expect(wrapper.find(View)).toHaveLength(1);
});
