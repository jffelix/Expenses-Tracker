import React from 'react';
import EntryListItem from '../sub-components/EntryListItem.jsx';

var EntryList = (props) => (

    <div>
        <h4>Hello from EntryList Component!</h4>
        {props.list.map((item, index) => 
            <EntryListItem item={item} key={index} />
        )}
    </div>

)

export default EntryList;