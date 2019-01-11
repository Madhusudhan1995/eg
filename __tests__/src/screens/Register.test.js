import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import Register from "../../../src/screens/Register";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("Register Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<Register store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
