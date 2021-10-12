import React from 'react';
import InputForm from './components/InputForm.jsx';
import EntryList from './components/EntryList.jsx';

import entrySeeds from '../../server/seeds.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: entrySeeds,
            // itemList: [],
            wasIntroButtonClicked: false,
            inputItem: '',
            inputPrice: '',
            totalPrice: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTotal = this.addTotal.bind(this);
    }

    componentDidMount() {
        this.addTotal();
    }

    handleInputChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            console.log('inputItem: ', this.state.inputItem);
        })

    }

    addTotal(array) {
        var totalPrice = 0;

        this.state.itemList.forEach(item => {
            totalPrice += item.price
        })

        this.setState({
            totalPrice: totalPrice.toFixed(2)
        })
    }

    render() {
        return (
            <div>
                <h2>Welcome to Expenses Tracker from App Component!</h2>
                <InputForm />
                <EntryList list={this.state.itemList} />
                <h2>Total: {this.state.totalPrice}</h2>
            </div>
        )
    }
}

export default App;