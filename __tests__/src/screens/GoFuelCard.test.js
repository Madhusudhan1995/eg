import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import GoFuelCard from "../../../src/screens/GoFuelCard";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("GoFuelCard Component", () => {

   it("rendering component", () => {
       const wrapper = shallow(<GoFuelCard store={store} />);
       expect(wrapper.length).toEqual(1);
    });
});
