import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {App} from "../App";

describe("App component testing", () => {
  it("App SnapShot", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Provider)).toHaveLength(1);
  });
});
