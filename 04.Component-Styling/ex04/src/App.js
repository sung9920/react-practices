import React from 'react';
import {Header} from './assets/css/App.css';
import Banner01 from './Banner01';

function App () {
    // console.log('변수 Header:' + Header);

    return (
        <div id={'App'}>
            <h1 className={Header}>{'CSS Module I'}</h1>
            <Banner01/>
        </div>
    );
}

export default App;