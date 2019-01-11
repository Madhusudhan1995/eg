import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";
import Faq from "../../../src/screens/Faq";

const initialState = {
    auth: {
        token: "dfgdgdfgd"
    },
    faqReduc: {
        faqData: []
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);

const props = {
    token : "sgsdgdsf"
}

describe('Faq Component', () => {
  it("rendering Faq component", () => {
      const wrapper = shallow(<Faq store={store} />);
      wrapper.setProps(props);
      expect(wrapper.find(View)).toHaveLength(0);
  });
});
