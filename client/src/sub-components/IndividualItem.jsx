import React from 'react';

class IndividualItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: []
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        console.log('item._id: ', this.props.items._id);
    }

    render() {
        return (
            <div>

                <p>{this.props.items.item}</p>
                <p>{this.props.items.price}</p>
                <p>{this.props.items.date}</p>
                <button className="deleteItem" onClick={this.deleteItem}>Delete Item</button>

            </div>
        )
    }
}

export default IndividualItem;