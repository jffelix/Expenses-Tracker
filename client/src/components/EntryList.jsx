import React from 'react';
import EntryListItem from '../sub-components/EntryListItem.jsx';

var EntryList = (props) => (

    <div>
        <h4>Item List (All)</h4>
        {props.list.map((item, index) => 
            <EntryListItem entry={item} key={index} />
        )}
    </div>

)

export default EntryList;