import React from "react";
import {shallow} from "enzyme";
import {View, TouchableOpacity} from "react-native";
import StationDetailTimings from "../../../src/components/StationDetailTimings/index";

describe("StationDetailTimings Component", () => {
    it("should render component", () => {
        const wrapper = shallow(<StationDetailTimings  />);
        expect(wrapper.find(View)).toHaveLength(6);
    });

    it("should call TouchableOpacity", () => {
        const wrapper = shallow(<StationDetailTimings />);
        expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
    });

    // it("should call toggle ", () => {
    //     const wrapper = shallow(<StationDetailTimings />);
    //     wrapper.instance().toggle ();
    //     expect(toggle.mock.calls.length).toBe(2);
    // });
    
    // it("should call _animate", () => {
    //     const wrapper = shallow(<StationDetailTimings />);
    //     wrapper.instance()._animate();
    //     expect(_animate.mock.calls.length).toBe(2);
    // });
    // it("should call renderItem", () => {
    //     const wrapper = shallow(<StationDetailTimings />);
    //     expect(wrapper.find(View)).toHaveLength(6);
    // });
})


