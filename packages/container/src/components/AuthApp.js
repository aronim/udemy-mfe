import React from "react";

import { mount } from "auth/AuthApp";
import MountableApp from "./MountableApp";

const AuthApp = ({ onSignIn }) => <MountableApp mount={ mount } onSignIn={ onSignIn }/>;

export default AuthApp;
