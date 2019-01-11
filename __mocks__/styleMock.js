const ReactNativeMock = require('react-native-mock/build/react-native');

ReactNativeMock.StyleSheet.create = function create(obj) {
  return Object.keys(obj).reduce((res, key, index) => {
    // eslint-disable-next-line no-param-reassign
    res[key] = index;
    return res;
  }, {});
};

// the cache key that real react native would get
const key = require.resolve('react-native');

// make sure the cache is filled with our lib
require.cache[key] = {
  id: key,
  filename: key,
  loaded: true,
  exports: ReactNativeMock,
};