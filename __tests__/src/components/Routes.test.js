import React from "react";
import {shallow} from "enzyme";

import {View} from "react-native";
import {Routes} from "../../../src/components";

const renderSettingsIcon = jest.fn();
const renderHomeIcon = jest.fn();
const renderFindIcon = jest.fn();
const renderLoyalityIcon = jest.fn();
const renderPromotionIcon = jest.fn();
const renderPayIcon = jest.fn();

jest.spyOn(Routes.prototype, 'renderSettingsIcon').mockImplementation(renderSettingsIcon);
jest.spyOn(Routes.prototype, 'renderHomeIcon').mockImplementation(renderHomeIcon);
jest.spyOn(Routes.prototype, 'renderFindIcon').mockImplementation(renderFindIcon);
jest.spyOn(Routes.prototype, 'renderLoyalityIcon').mockImplementation(renderLoyalityIcon);
jest.spyOn(Routes.prototype, 'renderPromotionIcon').mockImplementation(renderPromotionIcon);
jest.spyOn(Routes.prototype, 'renderPayIcon').mockImplementation(renderPayIcon);

describe("Routes Component", () => {
    it("Routes: is calling mapElement", () => {
        const wrapper = shallow(<Routes />);
        expect(wrapper).toHaveLength(1);
    });
});
