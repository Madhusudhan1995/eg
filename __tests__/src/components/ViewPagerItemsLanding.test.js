import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {View} from "react-native";
import ViewPagerItemsLanding from "../../../src/components/ViewPagerItemsLanding";

describe("ViewPagerItemsLanding Component", () => {
    it("should render component", () => {
        const wrapper = shallow(<ViewPagerItemsLanding  title= "Title 1" desc = "Desc 1" />);
        expect(wrapper.find(View)).toHaveLength(9);
    });

    it("should call onCloseClick", () => {
             const wrapper = shallow(<ViewPagerItemsLanding  title= "Title 5" desc = "Desc 5" />);
             wrapper.instance().onCloseClick();
             expect(wrapper.find(View)).toHaveLength(9);
    });

    // it("should call toggle", () => {
    //     const wrapper = shallow(<ExpandCollapseView  title="title test" desc = "desc test" />);
    //     wrapper.instance().toggle();
    //     expect(wrapper.find(View)).toHaveLength(6);
    // });
    //
    // it("should call _animate", () => {
    //     const wrapper = shallow(<ExpandCollapseView  title="title test" desc = "desc test" />);
    //     wrapper.instance()._animate();
    //     expect(wrapper.find(View)).toHaveLength(6);
    // });
})
