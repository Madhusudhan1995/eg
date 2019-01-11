import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {TouchableOpacity} from "react-native";
import LinkButton from "../../../src/components/LinkButton";

test("Component of LinkButton", () => {
    const wrapper = shallow(<LinkButton />);
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
});
