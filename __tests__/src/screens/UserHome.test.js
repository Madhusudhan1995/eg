import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Home from "../../../src/screens/UserHome";




describe("CardItem Component", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Home />)
    })
    it('CardItem should render correctly', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot()
    });
});
