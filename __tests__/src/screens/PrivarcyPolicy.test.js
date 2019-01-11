import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import PrivarcyPolicy from "../../../src/screens/PrivarcyPolicy";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("PrivarcyPolicy Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<PrivarcyPolicy store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
