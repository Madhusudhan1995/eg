import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import Support from "../../../src/screens/Support";

const initialState = {
    auth: {
        token: "xnhalkdjfh"
    },
    contactusRedu: {
        contactusData: []
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("Support Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<Support store={store} />);
        expect(wrapper.length).toEqual(1);
    });

    it("should call sendAnEmail", () => {
        const sendAnEmail = jest.fn();
        Support.prototype.sendAnEmail = sendAnEmail;
        const wrapper = shallow(<Support store={store} />)
        wrapper.instance().sendAnEmail();
        expect(wrapper.length).toEqual(1);
    });

    it("should call makeACall", () => {
        const makeACall = jest.fn();
        Support.prototype.makeACall = makeACall;
        const wrapper = shallow(<Support store={store} />)
        wrapper.instance().makeACall();
        expect(wrapper.length).toEqual(1);
    });


});
