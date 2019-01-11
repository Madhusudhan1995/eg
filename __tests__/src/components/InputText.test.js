import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {View} from "react-native";
import InputText from "../../../src/components/InputText";


const mapElement = jest.fn();

jest.spyOn(InputText.prototype, 'mapElement').mockImplementation(mapElement);

const props = {
    mapElement: () => {}
};

test("Component of InputText", () => {
    const wrapper = shallow(<InputText {...props} />);
    expect(wrapper.find(View)).toHaveLength(1);
});

describe("InputText Component", () => {

    it("InputText: is calling mapElement", () => {
        const wrapper = shallow(<InputText {...props} />);
        wrapper.instance().mapElement();
        expect(wrapper.find(View)).toHaveLength(1);
});
});
