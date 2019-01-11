import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {View, TouchableOpacity} from "react-native";
import ViewPagerItems from "../../../src/components/ViewPagerItems";


const onCloseClick = jest.fn();

jest.spyOn(ViewPagerItems.prototype, 'onCloseClick').mockImplementation(onCloseClick);


describe("ViewPagerItems Component", () => {
    it("should render component 1", () => {
        const wrapper = shallow(<ViewPagerItems  title= "Title 1" desc = "Desc 1" offset = {1} />);
        expect(wrapper.find(View)).toHaveLength(7);
    });

    it("should render component 2", () => {
        const wrapper = shallow(<ViewPagerItems  title= "Title 2" desc = "Desc 2" offset = {2} />);
        expect(wrapper.find(View)).toHaveLength(7);
    });

    it("should render component 3", () => {
        const wrapper = shallow(<ViewPagerItems  title= "Title 3" desc = "Desc 3" offset = {3} />);
        expect(wrapper.find(View)).toHaveLength(7);
    });

    it("should render component 4", () => {
        const wrapper = shallow(<ViewPagerItems  title= "Title 4" desc = "Desc 4" offset = {4} />);
        expect(wrapper.find(View)).toHaveLength(7);
    });

    it("should call onCloseClick", () => {
             const wrapper = shallow(<ViewPagerItems  title= "Title 5" desc = "Desc 5" offset = {1} />);
             wrapper.instance().onCloseClick();
             expect(wrapper.find(View)).toHaveLength(7);
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
