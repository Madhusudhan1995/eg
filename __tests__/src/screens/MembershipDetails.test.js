import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MembershipDetails from "../../../src/screens/MembershipDetails";
import configureStore from "redux-mock-store";


const initialState = {
    auth: {
        isLoggedin: ""
    }
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe("GridListView Component", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<MembershipDetails store={store}/>)
    })
    
    it('ListPicker should render correctly', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot()
    });
});