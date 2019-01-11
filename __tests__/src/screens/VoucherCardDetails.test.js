import React from "react";
import {shallow} from "enzyme";
import {View} from "react-native";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer'

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

import VoucherCardDetails from "../../../src/screens/VoucherCardDetails";

 

describe("Voucher Card Details Component", () => {
    it("rendering component", () => {
        const wrapper = shallow(<VoucherCardDetails store={store}/>);
        expect(wrapper.find(View)).toHaveLength(0)
    });
});