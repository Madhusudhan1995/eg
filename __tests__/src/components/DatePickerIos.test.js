import React from "react";
import {shallow, mount} from "enzyme";

import {View} from "react-native";
import {DatePickerIos} from "../../../src/components";

const mapElement = jest.fn();
const renderDatePicker = jest.fn();
const setDateValue = jest.fn();
const datePickerDoneBtnTapped = jest.fn();
const openDatePicker = jest.fn();

jest.spyOn(DatePickerIos.prototype, 'mapElement').mockImplementation(mapElement);
jest.spyOn(DatePickerIos.prototype, 'renderDatePicker').mockImplementation(renderDatePicker);
jest.spyOn(DatePickerIos.prototype, 'setDateValue').mockImplementation(setDateValue);
jest.spyOn(DatePickerIos.prototype, 'datePickerDoneBtnTapped').mockImplementation(datePickerDoneBtnTapped);
jest.spyOn(DatePickerIos.prototype, 'openDatePicker').mockImplementation(openDatePicker);

describe("DatePickerIos Component", () => {
    it("DatePickerIos: rendering DatePicker", () => {
        const wrapper = shallow(<DatePickerIos />);
        expect(wrapper).toHaveLength(1);
    });
});
