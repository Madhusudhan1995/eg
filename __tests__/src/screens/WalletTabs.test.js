import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

import WalletTabs from "../../../src/screens/WalletTabs";

describe("WalletTabs Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<WalletTabs store={store}/>);
        expect(wrapper.length).toEqual(1);
    });
});