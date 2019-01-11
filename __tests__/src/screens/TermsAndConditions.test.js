import React from "react";
import {shallow} from "enzyme";
import {View} from "react-native";
import configureStore from "redux-mock-store";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

import TermsAndConditions from "../../../src/screens/TermsAndConditions";

describe("TermsAndConditions Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<TermsAndConditions store={store}/>);
        expect(wrapper.length).toEqual(1);
    });
});
