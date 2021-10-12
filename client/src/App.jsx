import React from 'react';
import InputForm from './components/InputForm.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
                {/* <form>
                    <p>Item</p>
                    <input name="inputItem" onChange={this.handleInputChange} value={this.state.inputItem} />
                    <p>Price</p>
                    <input name="inputPrice" onChange={this.handleInputChange} value={this.state.inputItem} />
                </form> */}
                <InputForm />
            </div>
        )
    }
}

export default App;