import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {

    console.log(groceries);
    // const a = [<GroceryItem name={'bread'} count={10}/>, <GroceryItem name={'milk'} count={5}/>];
    
    /*
    const a = groceries.map((item, index) => {
        return <GroceryItem key={index} name={item.name} count={item.count} />
    });
    */

    return (
        <ol className={'grocery-list'}>
            {groceries.map((item, index) => (
                <GroceryItem key={index} name={item.name} count={item.count} />
            ))}
        </ol>
    )
}

//React.createElement('ol', {}, <GroceryItem />, <GroceryItem />);
//React.createElement('ol', {}, [<GroceryItem />, <GroceryItem />]);

export default GroceryList;