import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {shallow} from "enzyme";

import {View} from "react-native";
import renderer from 'react-test-renderer';
import OnBoardingScreen from "../../../src/screens/OnBoardingScreen";


const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("OnBoardingScreen Component", () => {
    it("should render component", () => {
        const wrapper = shallow(<OnBoardingScreen  />);
        expect(wrapper.find(View)).toHaveLength(5);
    });
});
