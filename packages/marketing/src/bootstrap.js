import React from "react";
import ReactDom from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

// Mount function to start up the app
const mount = (element, { defaultHistory, initialPath, onNavigate }) => {
    const history = defaultHistory || createMemoryHistory({ initialEntries: [ initialPath ] });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    const app = <App history={ history }/>;

    ReactDom.render(app, element);

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;
            console.log("Marketing: " + nextPathname);
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
    const element = document.querySelector("#_marketing-dev-root");
    if (element) {
        mount(element, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
