import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import PreferredStation from "../../../src/screens/PreferredStation";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("PreferredStation Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<PreferredStation store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
