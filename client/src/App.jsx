import React from 'react';
import InputForm from './components/InputForm.jsx';
import entrySeeds from '../../server/seeds.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entryList: [],
            wasIntroButtonClicked: false,
            inputItem: '',
            inputPrice: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            console.log('inputItem: ', this.state.inputItem);
        })

    }

    render() {
        return (
            <div>
                <h2>Welcome to Expenses Tracker from App Component!</h2>
                <InputForm />
            </div>
        )
    }
}

export default App;