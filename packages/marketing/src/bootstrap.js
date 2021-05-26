import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app. We are exporting the mount function instead of a React component because
// we dont want the container app to assume that a child is using any particular framework (near-zero coupling between
// container and child apps. This function signature can be used regardless of js framework
const mount = (el) => {
    ReactDOM.render(
      <App />,
        el
    );
}

// If we are in development and in isolation call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    
    if(devRoot) {
        mount(devRoot);
    }
}

// We are running through container and we should export the mount function
export {mount};
