import React from 'react';
import axios from 'axios';

class IndividualItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: []
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        var selectedItem = this.props.items;

        axios.delete('/items', selectedItem._id)
        .then(response => {
            this.props.showAllItems();

            console.log('Succesfully connected with DELETE request in Axios!');
        })
        .catch(err => {
            console.log('Error received with DELETE request in Axios', err);
        })

        // console.log('item._id: ', selectedItem._id);
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