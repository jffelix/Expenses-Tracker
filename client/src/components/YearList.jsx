import React from 'react';
import YearListItem from '../sub-components/YearListItem.jsx';

var YearList = (props) => {

    var yearArray = [];

    for (var key in props.yearList) {

        yearArray.push({
            [key]: props.yearList[key]
        })

    }

    console.log('yearArray: ', yearArray);

    return (
        <div>
            <h4>Hello from YearList Component!</h4>
        </div>
    )

}

export default YearList;