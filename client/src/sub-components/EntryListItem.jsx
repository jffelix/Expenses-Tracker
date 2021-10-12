import React from 'react';

class EntryListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>{this.props.entry.item}</p>
                <p>{this.props.entry.price.toFixed(2)}</p>
                <p>{this.props.entry.date}</p>
                <p></p>
                <button>Remove Item</button>
            </div>
        )
    }

}

export default EntryListItem;