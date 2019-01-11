import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import CreditAndDebitCardList from "../../../src/screens/creditAndDebitCardList";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("creditAndDebitCardList Component", () => {

   it("rendering component", () => {
       const wrapper = shallow(<CreditAndDebitCardList store={store} />);
       expect(wrapper.length).toEqual(1);
    });
});
