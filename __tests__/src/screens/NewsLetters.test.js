import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import NewsLetters from "../../../src/screens/NewsLetters";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("NewsLetters Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<NewsLetters store={store} />);
        expect(wrapper.length).toEqual(1);
    });

    it("should call newsLetterSubscribe", () => {
        const newsLetterSubscribe = jest.fn();
        NewsLetters.prototype.newsLetterSubscribe = newsLetterSubscribe;
        const wrapper = shallow(<NewsLetters store={store} />);
        wrapper.instance().newsLetterSubscribe();
        expect(wrapper.length).toEqual(1);
    });
});
