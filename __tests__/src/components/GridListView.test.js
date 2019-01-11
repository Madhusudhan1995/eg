import React from "react";
import {View, TouchableOpacity} from "react-native";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GridListView from "../../../src/components/GridListView/index";

describe("GridListView Component", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<GridListView />)
    })
    it("should render component", () => {
        expect(wrapper.find(View)).toHaveLength(3);
    });

    it("should call TouchableOpacity", () => {
        expect(wrapper.find(TouchableOpacity)).toHaveLength(0);
    });
    it('ListPicker should render correctly', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot()
    });

    // it("should call onGridView ", () => {
    //     const onGridView = jest.fn();
    //     GridListView.prototype.onGridView = onGridView;
    //     const wrapper = shallow(<GridListView />);
    //     wrapper.instance().onGridView ();
    //     expect(wrapper.length).toEqual(1);
    // });
    
    // it("should call _animate", () => {
    //     const _animate = jest.fn();
    //     GridListView.prototype._animate = _animate;
    //     const wrapper = shallow(<GridListView />);
    //     wrapper.instance()._animate();
    //     expect(wrapper.length).toEqual(1);
    // });
})
