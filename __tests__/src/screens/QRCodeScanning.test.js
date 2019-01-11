import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";

import QRCodeScanning from "../../../src/screens/QRCodeScanning";

const initialState = {};

const mockStore = configureStore();

const store = mockStore(initialState);

describe("QRCodeScanning Component", () => {

    it("rendering component", () => {
        const wrapper = shallow(<QRCodeScanning store={store} />);
        expect(wrapper.length).toEqual(1);
    });

    it("should call hideAndShowConfirmButton", () => {
        const hideAndShowConfirmButton = jest.fn();
        QRCodeScanning.prototype.hideAndShowConfirmButton = hideAndShowConfirmButton;
        const wrapper = shallow(<QRCodeScanning store={store} />)
        wrapper.instance().hideAndShowConfirmButton();
        expect(wrapper.length).toEqual(1);
    });

    it("should call _requestPermission", () => {
      const _requestPermission = jest.fn();
      QRCodeScanning.prototype._requestPermission = _requestPermission;
      const wrapper = shallow(<QRCodeScanning store={store} />)
      wrapper.instance()._requestPermission();
      expect(wrapper.length).toEqual(1);
  });
  it("should call _checkCameraAndPhotos", () => {
      const _checkCameraAndPhotos = jest.fn();
      QRCodeScanning.prototype._checkCameraAndPhotos = _checkCameraAndPhotos;
      const wrapper = shallow(<QRCodeScanning store={store} />)
      wrapper.instance()._checkCameraAndPhotos();
      expect(wrapper.length).toEqual(1);
  });
  it("should call confirmButtonTapped", () => {
      const confirmButtonTapped = jest.fn();
      QRCodeScanning.prototype.confirmButtonTapped = confirmButtonTapped;
      const wrapper = shallow(<QRCodeScanning store={store}/>)
      wrapper.instance().confirmButtonTapped();
      expect(wrapper.length).toEqual(1);
  });
  
  it("should call paymentUpdateDetailsBtntapped", () => {
      const paymentUpdateDetailsBtntapped = jest.fn();
      QRCodeScanning.prototype.paymentUpdateDetailsBtntapped = paymentUpdateDetailsBtntapped;
      const wrapper = shallow(<QRCodeScanning store={store}/>)
      wrapper.instance().paymentUpdateDetailsBtntapped();
      expect(wrapper.length).toEqual(1);
  });
    

});