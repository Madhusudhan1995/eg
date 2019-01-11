import React from "react";
import {shallow} from "enzyme";
import {Modal} from "react-native";
import configureStore from "redux-mock-store";

import {Loader} from "../../../src/components";

const initialState = {
  utility: {
    loader: false
  }
};

const state = {
  loader: false
}

const mockStore = configureStore();

const store = mockStore(initialState);

test("Componet of Loader", () => {
    const wrapper = shallow(<Loader store={store} />);
    expect(wrapper.length).toEqual(1);
});
