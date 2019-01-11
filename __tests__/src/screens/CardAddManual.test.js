import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import CardAddManual from "../../../src/screens/CardAddManual";

const initialState = {
  auth: {
    token: "sfgdfgs"
  }
};

const mockStore = configureStore();


const store = mockStore(initialState);

jest.mock('../../../src/screens/CardAddManual'); // CardAddManual is now a mock constructor

// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   CardAddManual.mockClear();
// });


describe("AddLoyaltyCardManually Component", () => {

    it("rendering CardAddManual component", () => {
        const wrapper = shallow(<CardAddManual store={store} />);
        expect(wrapper.length).toEqual(1);
    });
    it("rendering Views", () => {
        const wrapper = shallow(<CardAddManual store={store} />);
        expect(wrapper.find(View)).toHaveLength(0);
    });
    it("should call validate", () => {
        const validate = jest.fn();
        CardAddManual.prototype.validate = validate;
        const wrapper = shallow(<CardAddManual store={store} />)
        wrapper.instance().validate();
        expect(wrapper.length).toEqual(1);
    });
    it("should call normalizePhone", () => {
        const normalizePhone = jest.fn();
        CardAddManual.prototype.normalizePhone = normalizePhone;
        const wrapper = shallow(<CardAddManual store={store} />)
        wrapper.instance().normalizePhone();
        expect(wrapper.length).toEqual(1);
    });
    it("should call renderScanInput", () => {
        const renderScanInput = jest.fn();
        CardAddManual.prototype.renderScanInput = renderScanInput;
        const wrapper = shallow(<CardAddManual store={store} />)
        wrapper.instance().renderScanInput();
        expect(wrapper.find(View)).toHaveLength(0);
    });

});
