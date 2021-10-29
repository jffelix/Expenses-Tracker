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
        console.log('Hello from deleteItem!');
    }

    render() {
        return (
            <div>
                {this.props.items.map((item, index) => 
                    <div key={index}>
                        <p>{item.item}</p>
                        <p>{item.price}</p>
                        <p>{item.date}</p>
                        <button className="deleteItem" onClick={this.deleteItem}>Delete Item</button>
                    </div>
                )}
            </div>
        )
    }
}

export default IndividualItem;