import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";

import UserSettings from "../../../src/screens/UserSettings";

const initialState = {
    auth: {
        user: "megha"
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("UserSettings Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<UserSettings store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
