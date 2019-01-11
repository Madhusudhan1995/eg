import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import GoFuelCardAddManually from "../../../src/screens/GoFuelCardAddManually";

const initialState = {
  auth: {
    token: "sdfsfs"
  }
};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("GoFuelCard Component", () => {

   it("rendering GoFuelCardAddManually component", () => {
       const wrapper = shallow(<GoFuelCardAddManually store={store} />);
       expect(wrapper.length).toEqual(1);
    });
    it("should call onChange", () => {
        const onChange = jest.fn();
        GoFuelCardAddManually.prototype.onChange = onChange;
        const wrapper = shallow(<GoFuelCardAddManually store={store}/>)
        wrapper.instance().onChange();
        expect(wrapper.length).toEqual(1);
    });
});
