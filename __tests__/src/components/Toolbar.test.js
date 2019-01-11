import React from "react";
import {shallow} from "enzyme";

import {View} from "react-native";
import Toolbar from "../../../src/components/Toolbar";

const getTypedIcon = jest.fn();
const getSizeIcon = jest.fn();
const getColorIcon = jest.fn();

jest.spyOn(Toolbar.prototype, 'getTypedIcon').mockImplementation(getTypedIcon);
jest.spyOn(Toolbar.prototype, 'getSizeIcon').mockImplementation(getSizeIcon);
jest.spyOn(Toolbar.prototype, 'getColorIcon').mockImplementation(getColorIcon);

test("Components of Toolbar", () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find(View)).toHaveLength(2);
});
