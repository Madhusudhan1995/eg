import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import StoreLocator from "../../../src/screens/StoreLocator";

const initialState = {
    stationsReducer: {
        allStations: ""
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("StoreLocator Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<StoreLocator store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
