import React from "react";
import {shallow} from "enzyme";
import {View} from "react-native";
import ExpandCollapseViewHeader from "../../../src/components/ExpandCollapseViewHeader";

jest.mock('react-native-camera', () => require.requireActual('../__mocks__/react-native-camera').default)
jest.mock('react-native-awesome-card-io', () => require.requireActual('../__mocks__/react-native-awesome-card-io').default)

describe("ExpandCollapseViewHeader Component", () => {
    it('should render component',function () {
        const wrapper = shallow(<ExpandCollapseViewHeader  title="title test" faqData = {[{subQues:'Sub Question 1', subTitle:'Lorem ipsum dolor sit amet', subDesc:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, ]} />);
        expect(wrapper.find(View)).toHaveLength(6);
    });

    // it("should call toggle", () => {
    //     const wrapper = shallow(<ExpandCollapseViewHeader  title="title test" faqData = {[{subQues:'Sub Question 1', subTitle:'Lorem ipsum dolor sit amet', subDesc:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, ]} />);
    //     wrapper.instance().toggle();
    //     expect(wrapper.find(View)).toHaveLength(6);
    // });
    //
    // it("should call _animate", () => {
    //     const wrapper = shallow(<ExpandCollapseViewHeader  title="title test" faqData = {[{subQues:'Sub Question 1', subTitle:'Lorem ipsum dolor sit amet', subDesc:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, ]} />);
    //     wrapper.instance()._animate();
    //     expect(wrapper.find(View)).toHaveLength(6);
    // });
})
