import React from 'react';

var YearListItem = (props) => {
    // console.log('props.years: ', props.years);
    // console.log('props.items: ', props.items);

    var yearTotal = 0;

    props.items.forEach((item) => {
        yearTotal += item.price;
    })

    // MONTH TOTAL?
    // DAY TOTAL?

    return (
        <div>
            <h2>{props.years}</h2>

            {props.items.map((item, index) =>
                <div key={index}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                    <button>Delete Item</button>
                </div>
            )}

            <div>
                <h3>Year Total: {yearTotal}</h3>
            </div>

        </div>
    )

}

export default YearListItem;