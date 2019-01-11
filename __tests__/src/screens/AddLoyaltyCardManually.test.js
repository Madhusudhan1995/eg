import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import AddLoyaltyCardManually from "../../../src/screens/CardAddManual";

const initialState = {
  auth: {
    token: "dfgdfgd"
  }
};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("AddLoyaltyCardManually Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<AddLoyaltyCardManually store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
