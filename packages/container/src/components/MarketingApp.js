import React from "react";

import { mount } from "marketing/MarketingApp";
import MountableApp from "./MountableApp";

const MarketingApp = (props) => <MountableApp mount={ mount } { ...props } />

export default MarketingApp;
