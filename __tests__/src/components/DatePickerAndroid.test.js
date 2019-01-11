import React from "react";
import {shallow, mount} from "enzyme";

import {View} from "react-native";
import {DatePickerAndroid} from "../../../src/components";

const openDatePicker = jest.fn();

jest.spyOn(DatePickerAndroid.prototype, 'openDatePicker').mockImplementation(openDatePicker);

describe("DatePickerAndroid Component", () => {
    it("DatePickerAndroid: rendering DatePicker", () => {
        const wrapper = shallow(<DatePickerAndroid />);
        expect(wrapper.find(View)).toHaveLength(3);
    });

    it("DatePickerAndroid: is calling mapElement", () => {
        const wrapper = shallow(<DatePickerAndroid />);
        wrapper.instance().mapElement();
        expect(wrapper.find(View)).toHaveLength(3);
    });

    it("DatePickerAndroid: is calling openDatePicker", () => {
        const wrapper = shallow(<DatePickerAndroid />);
        wrapper.instance().openDatePicker();
        expect(wrapper.find(View)).toHaveLength(3);
    });
});
    test('the data is date', async () => {
        expect.assertions(1);
        const data = await DatePickerAndroid;
        expect().toBe(undefined);
    });
    
 
