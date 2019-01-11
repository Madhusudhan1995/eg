import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import CreditAndDebitDetails from "../../../src/screens/CreditAndDebitDetails";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("CreditAndDebitDetails Component", () => {

   it("rendering component", () => {
       const wrapper = shallow(<CreditAndDebitDetails store={store} />);
       expect(wrapper.length).toEqual(1);
    });
});
