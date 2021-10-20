import React from 'react';
import '../../dist/styles.css';

var DayListItem = (props) => {

    // var dayTotal = 0;

    // props.items.forEach(item => {
    //     dayTotal += item.price;
    // })

    // console.log('dayTotal: ', dayTotal);

    return (
        <div className="dayEntry">
            <h4 className="centerDay">{props.days}</h4>

            {props.items.map((item, index) => 
                <div key={index}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                    <button className="deleteItem">Delete Item</button>
                </div>
            )}
        </div>
    )
}

export default DayListItem;