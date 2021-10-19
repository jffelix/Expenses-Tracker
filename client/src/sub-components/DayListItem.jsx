import React from 'react';

var DayListItem = (props) => {

    // var dayTotal = 0;

    // props.items.forEach(item => {
    //     dayTotal += item.price;
    // })

    // console.log('dayTotal: ', dayTotal);

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