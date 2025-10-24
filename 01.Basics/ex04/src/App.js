import React from 'react';

function App() {
    // const App = document.createElement('div');
    // App.textContent = "Hello Webpack";

    const App = React.createElement('div', null, 'Hello React');
    return App;
}

export {App};