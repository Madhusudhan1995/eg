import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import GoFuelCardDetails from "../../../src/screens/GoFuelCardDetails";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("GoFuelCardDetails Component", () => {

   it("rendering component", () => {
       const wrapper = shallow(<GoFuelCardDetails store={store} />);
       expect(wrapper.length).toEqual(1);
    });

    it("should call toggleSwitch", () => {
        const toggleSwitch = jest.fn();
        GoFuelCardDetails.prototype.toggleSwitch = toggleSwitch;
        const wrapper = shallow(<GoFuelCardDetails store={store} />)
        wrapper.instance().toggleSwitch(true);
        expect(wrapper.length).toEqual(1);

    });

    it("should call deleteCardFunction", () => {
        const deleteCardFunction = jest.fn();
        GoFuelCardDetails.prototype.deleteCardFunction = deleteCardFunction;
        const wrapper = shallow(<GoFuelCardDetails store={store} />)
        wrapper.instance().deleteCardFunction();
        expect(wrapper.length).toEqual(1);
    });
});
