import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import StoreList from "../../../src/screens/StoreList";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

const selectedStore = jest.fn();

jest.spyOn(StoreList.prototype, 'selectedStore').mockImplementation(selectedStore);

describe("StoreList Component", () => {

   it("rendering component", () => {
       const wrapper = shallow(<StoreList store={store} />);
       expect(wrapper.find(View)).toHaveLength(1);
    });
});
