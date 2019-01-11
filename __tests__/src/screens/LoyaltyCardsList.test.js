import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import LoyaltyCardsList from "../../../src/screens/LoyaltyCards";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("LoyaltyCardsList Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<LoyaltyCardsList store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});