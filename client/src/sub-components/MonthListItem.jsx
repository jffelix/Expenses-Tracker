import React from 'react';

var MonthListItem = (props) => {

    // Calculate total expenses for month
    var monthTotal = 0;

    props.days.forEach(item => {
        monthTotal += item.price;
    })
    // console.log('monthTotal: ', monthTotal);

    // CATEGORIZE BY DAY HERE

    return (
        <div>
            <h3>{props.months}</h3>

            {props.days.map((item, index) =>
                <div key={index}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                    <button>Delete Item</button>
                </div>
            )}

            <div>
                <h4>Month Total: {monthTotal}</h4>
            </div>
        </div>
    )
}

export default MonthListItem;