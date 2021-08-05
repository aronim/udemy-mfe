import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const MountableApp = (props) => {

    const { mount } = props;
    const history = useHistory();
    const ref = useRef(null);

    const onNavigate = ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
            history.push(nextPathname);
        }
    }

    useEffect(() => {
        const initialPath = history.location.pathname;
        const { onParentNavigate } = mount(ref.current, { initialPath, onNavigate, ...props });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ ref }/>
}

export default MountableApp;
