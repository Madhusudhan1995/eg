import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import PaymentSuccessfull from "../../../src/screens/PaymentSuccessfull";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("PaymentSuccessfull Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<PaymentSuccessfull store={store} />);
        expect(wrapper.length).toEqual(1);
    });
    it("should call goToHomeScreen", () => {
        const goToHomeScreen = jest.fn();
        PaymentSuccessfull.prototype.goToHomeScreen = goToHomeScreen;
        const wrapper = shallow(<PaymentSuccessfull store={store} />);
        wrapper.instance().goToHomeScreen();
        expect(wrapper.length).toEqual(1);
    });

});
