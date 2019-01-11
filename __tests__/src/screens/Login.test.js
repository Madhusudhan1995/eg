import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import Login from "../../../src/screens/Login";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("Login Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<Login store={store} />);
        expect(wrapper.length).toEqual(1);
    });

    it("should call onSubmit", () => {
        const onSubmit = jest.fn();
        Login.prototype.onSubmit = onSubmit;
        const wrapper = shallow(<Login store={store} />)
        wrapper.instance().onSubmit({email: "abc@xyz.com", password: "12345678"});
        expect(wrapper.length).toEqual(1);
    });

    it("should call getFacebookProfileDetails", () => {
        const getFacebookProfileDetails = jest.fn();
        Login.prototype.getFacebookProfileDetails = getFacebookProfileDetails;
        const wrapper = shallow(<Login store={store} />)
        wrapper.instance().getFacebookProfileDetails();
        expect(wrapper.length).toEqual(1);
    });

    it("should call onShowPasswordIconPress", () => {
        const onShowPasswordIconPress = jest.fn();
        Login.prototype.onShowPasswordIconPress = onShowPasswordIconPress;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().onShowPasswordIconPress();
        expect(wrapper.length).toEqual(1);
    });

    it("should call onChange", () => {
        const onChange = jest.fn();
        Login.prototype.onChange = onChange;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().onChange();
        expect(wrapper.length).toEqual(1);
    });

    it("should call renderTextInput", () => {
        const renderTextInput = jest.fn();
        Login.prototype.renderTextInput = renderTextInput;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().renderTextInput();
        expect(wrapper.length).toEqual(1);
    });

    it("should call pickerDoneBtnTapped", () => {
        const pickerDoneBtnTapped = jest.fn();
        Login.prototype.pickerDoneBtnTapped = pickerDoneBtnTapped;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().pickerDoneBtnTapped();
        expect(wrapper.length).toEqual(1);
    });

    it("should call handlePickerValue", () => {
        const handlePickerValue = jest.fn();
        Login.prototype.handlePickerValue = handlePickerValue;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().handlePickerValue();
        expect(wrapper.length).toEqual(1);
    });

    it("should call handleFacebookLogin", () => {
        const handleFacebookLogin = jest.fn();
        Login.prototype.handleFacebookLogin = handleFacebookLogin;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().handleFacebookLogin();
        expect(wrapper.length).toEqual(1);
    });

    it("should call _segmentPicker", () => {
        const _segmentPicker = jest.fn();
        Login.prototype._segmentPicker = _segmentPicker;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance()._segmentPicker();
        expect(wrapper.length).toEqual(1);
    });

    it("should call languageButtonTapped", () => {
        const languageButtonTapped = jest.fn();
        Login.prototype.languageButtonTapped = languageButtonTapped;
        const wrapper = shallow(<Login store={store} />);
        wrapper.instance().languageButtonTapped();
        expect(wrapper.length).toEqual(1);
    });

});
