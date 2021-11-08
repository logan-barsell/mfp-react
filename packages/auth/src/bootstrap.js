import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//Mount function to start up the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    //if app is being rendered in isolation it uses default history, otherwise it uses memory history
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });
    if (onNavigate){
// Whenever the url/path changes, call onNavigate function
        history.listen(onNavigate);
    }

    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname != nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

// If we are in development and in isolation,
// call mount immediately
if ( process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are running through container
// and we should export the mount function
export { mount };