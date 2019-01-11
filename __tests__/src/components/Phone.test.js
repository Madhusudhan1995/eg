import React from "react";
import {shallow} from "enzyme";

import {View} from "react-native";
import Phone from "../../../src/components/Phone";

const mapElement = jest.fn();

jest.spyOn(Phone.prototype, 'mapElement').mockImplementation(mapElement);

const props = {
    mapElement: () => {}
};

test("Componet of Phone", () => {
    const wrapper = shallow(<Phone />);
    expect(wrapper.find(View)).toHaveLength(3);
});


describe("Phone Component", () => {

    it("Phone: is calling mapElement", () => {
        const wrapper = shallow(<Phone {...props} />);
        wrapper.instance().mapElement();
        expect(wrapper.find(View)).toHaveLength(3);
});
});
