import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './appReducer';
import auth from "./authReducer";
import utility from "./utilityReducer";
import onboarding from "./onBoardingReducer";
import faqReduc from "./faqReducer";
import voucherListReduc from "./voucherListReducer";
import contactusRedu from "./contactUsReducer";
import homeReduc from "./homeReducer";
import editProfileReduc from "./editProfileReducer";
import stationsReducer from './getStationsReducer';

const form = formReducer;

const reducers = {
  app, form, auth, utility, onboarding,editProfileReduc, faqReduc, voucherListReduc,contactusRedu, homeReduc,stationsReducer
};

export default combineReducers(reducers);
