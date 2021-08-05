import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

// Mount function to start up the app
const mount = (element) => {

    const app = createApp(Dashboard)

    app.mount(element);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
    const element = document.querySelector("#_dashboard-dev-root");
    if (element) {
        mount(element);
    }
}

export { mount };
