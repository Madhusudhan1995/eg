import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";

import EditProfile from "../../../src/screens/EditProfile";

const initialState = {
    auth: {
        user: "megha"
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("EditProfile Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<EditProfile store={store} />);
        expect(wrapper.length).toEqual(1);
    });
});
