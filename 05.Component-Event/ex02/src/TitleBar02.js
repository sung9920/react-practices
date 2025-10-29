import React from 'react';

export default function TitelBar02() {

    const onClick = () => {
        console.log('TitleBar02 clicked!');
    }


    return (
            <div>
                <h4 onClick={onClick}>{'Function Component (click here!)'}</h4>
            </div>
    )
}