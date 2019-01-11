import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import StoreDetails from "../../../src/screens/StoreDetails";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("StoreDetails Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<StoreDetails store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
