import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {TouchableOpacity, ScrollView} from "react-native";

import Home from "../../../src/screens/Home";

const initialState = {
    homeReduc: {
        weatherData: []
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);


describe("Home Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<Home store={store} />);
        expect(wrapper.find(TouchableOpacity)).toHaveLength(0);
    });
    it("rendering component", () => {
        const wrapper = shallow(<Home store={store} />);
        expect(wrapper.find(ScrollView)).toHaveLength(0);
    });
    it("should call keyExtractor", () => {
        const keyExtractor = jest.fn();
        Home.prototype.keyExtractor = keyExtractor;
        const wrapper = shallow(<Home store={store}/>)
        wrapper.instance().keyExtractor();
        expect(wrapper.length).toEqual(1);
    });
    it("should call componentDidMount", () => {
        const componentDidMount = jest.fn();
        Home.prototype.componentDidMount = componentDidMount;
        const wrapper = shallow(<Home store={store}/>)
        wrapper.instance().componentDidMount();
        expect(wrapper.length).toEqual(1);
    });
});


