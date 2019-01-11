import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NativeModules } from 'react-native';

global.fetch = require('jest-fetch-mock');

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator = {
  userAgent: 'node.js',
  geolocation: mockGeolocation
};

jest.mock('react-native-config');
Enzyme.configure({ adapter: new Adapter() });
