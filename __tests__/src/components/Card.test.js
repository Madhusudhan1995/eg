import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';
import CardItem from "../../../src/components/Card/index";


jest.mock('../../../src/components/Card/index', () => {
    return {
        default: jest.fn(),
    };
});

describe("CardItem Component", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<CardItem />)
    })
    it('CardItem should render correctly', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot()
    });
});

