import React from 'react';

var DayListItem = (props) => {

    return (
        <div>
            <h4>{props.days}</h4>

            {props.items.map((item, index) => 
                <div key={index}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                    <button>Delete Item</button>
                </div>
            )}
        </div>
    )
}

export default DayListItem;