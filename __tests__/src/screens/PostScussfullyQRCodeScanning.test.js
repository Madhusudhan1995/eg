import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import PostScussfullyQRCodeScanning from "../../../src/screens/PostScussfullyQRCodeScanning";

const initialState = {
    utility: {
        currentScene: "_home"
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("PostScussfullyQRCodeScanning Component", () => {

    it("rendering PostScussfullyQRCodeScanning component", () => {
        const wrapper = shallow(<PostScussfullyQRCodeScanning store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
