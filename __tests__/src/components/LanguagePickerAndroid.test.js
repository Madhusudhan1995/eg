import React from "react";
import {shallow} from "enzyme";

import {View, TouchableOpacity} from "react-native";
import LunguagePickerAndroid from "../../../src/components/LunguagePickerAndroid/index";

describe("DatePickerIos Component", () => {
    it("LunguagePickerAndroid: rendering LunguagePickerAndroid", () => {
        const wrapper = shallow(<LunguagePickerAndroid />);
        expect(wrapper.find(View)).toHaveLength(4);
    });
    it("LunguagePickerAndroid: rendering LunguagePickerAndroid", () => {
        const wrapper = shallow(<LunguagePickerAndroid />);
        expect(wrapper.find(TouchableOpacity)).toHaveLength(2);
    });
    it("should call lungugaePikerOkButtonTapped", () => {
        const wrapper = shallow(<LunguagePickerAndroid />);
        wrapper.instance().lungugaePikerOkButtonTapped();
        expect().toBe(undefined);
    });
    it("should call selectedItemFromFlatList", () => {
        const wrapper = shallow(<LunguagePickerAndroid />);
        wrapper.instance().selectedItemFromFlatList();
        expect().toBe(undefined);
    });

});

 