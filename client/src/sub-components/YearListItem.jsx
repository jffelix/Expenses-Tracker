import React from 'react';
import MonthListItem from './MonthListItem.jsx';

var YearListItem = (props) => {
    // console.log('props.years: ', props.years);
    // console.log('props.items: ', props.items);

    // Calculate total expenses for year
    var yearTotal = 0;

    props.items.forEach(item => {
        yearTotal += item.price;
    })

    // Categorize items by month
    var monthObj = {};

    props.items.forEach(item => {
        var splitDate = item.date.split(' ');
        if (monthObj[splitDate[0]] === undefined) {
            monthObj[splitDate[0]] = [item];
        } else {
            monthObj[splitDate[0]].push(item);
        }
        console.log('splitDate: ', splitDate);
    })
    // console.log('monthObj: ', monthObj);

    var monthObjToArray = Object.entries(monthObj);
    // console.log('monthObjToArray: ', monthObjToArray);

    return (
        <div>
            <h2>{props.years}</h2>

            {/* {props.items.map((item, index) =>
                <div key={index}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                    <button>Delete Item</button>
                </div>
            )} */}

            {monthObjToArray.map((month, index) => 
                <MonthListItem months={month[0]} days={month[1]} key={index} />
            )}

            <div>
                <h3>Year Total: {yearTotal.toFixed(2)}</h3>
            </div>

        </div>
    )

}

export default YearListItem;