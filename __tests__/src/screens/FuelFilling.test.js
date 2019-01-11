import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import FuelFilling from "../../../src/screens/FuelFilling";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("FuelFilling Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<FuelFilling store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
