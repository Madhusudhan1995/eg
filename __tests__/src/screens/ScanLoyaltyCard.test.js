import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import ScanLoyaltyCard from "../../../src/screens/ScanCard";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("ScanLoyaltyCard Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<ScanLoyaltyCard store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
