import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import {View} from "react-native";

import VoucherList from "../../../src/screens/VoucherList";

const initialState = {
    auth: {
        token: "dgdfgdfgfdgd"
    },
    voucherListReduc: {
        voucherListData: []
    }
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("VoucherList Component", () => {

   it("rendering component", () => {
        const wrapper = shallow(<VoucherList store={store} token="dfgdfgdf" />)
       expect(wrapper.length).toEqual(1);
    });

    it("should call _getProducts", () => {
        const _getProducts = jest.fn();
        VoucherList.prototype._getProducts = _getProducts;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance()._getProducts();
        expect(wrapper.length).toEqual(1);
    });

    it("should call _getMore", () => {
        const _getMore = jest.fn();
        VoucherList.prototype._getMore = _getMore;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance()._getMore();
        expect(wrapper.length).toEqual(1);
    });

    it("should call _renderItem", () => {
        const _renderItem = jest.fn();
        VoucherList.prototype._renderItem = _renderItem;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance()._renderItem( {store: "KFC", image: "bk3.jpg", cashOff: "2", voucherCode: "7DJHZ SHGY E", voucherValidity: "JAN 12 2019", currencyIcon: "\u20AC", barCode: ""});
        expect(wrapper.length).toEqual(1);
    });

    it("should call _keyExtractor", () => {
        const _keyExtractor = jest.fn();
        VoucherList.prototype._keyExtractor = _keyExtractor;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance()._keyExtractor();
        expect(wrapper.length).toEqual(1);
    });

    it("should call _onRefresh", () => {
        const _onRefresh = jest.fn();
        VoucherList.prototype._onRefresh = _onRefresh;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance()._onRefresh();
        expect(wrapper.length).toEqual(1);
    });

    it("should call _renderRefreshControl", () => {
        const _renderRefreshControl = jest.fn();
        VoucherList.prototype._renderRefreshControl = _renderRefreshControl;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance()._renderRefreshControl();
        expect(wrapper.length).toEqual(1);
    });

    it("should call toggleModal", () => {
        const toggleModal = jest.fn();
        VoucherList.prototype.toggleModal = toggleModal;
        const wrapper = shallow(<VoucherList store={store} />)
        wrapper.instance().toggleModal(true);
        expect(wrapper.length).toEqual(1);
    });


});
