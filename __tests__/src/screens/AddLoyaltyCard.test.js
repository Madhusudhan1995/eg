import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import AddLoyaltyCard from "../../../src/screens/LoyaltyCardDetails";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("AddLoyaltyCard Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<AddLoyaltyCard store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
