import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import ForgotPassword from "../../../src/screens/ForgotPassword";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("ForgotPassword Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<ForgotPassword store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
