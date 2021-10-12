import React from 'react';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputItem: '',
            inputPrice: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }

    handleInputChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleInputSubmit(event) {
        event.preventDefault();

        var entryObj = {
            item: this.state.inputItem,
            price: this.state.inputPrice,
            date: new Date()
        }

        console.log('entryObj: ', entryObj);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleInputSubmit}>
                    <p>Item</p>
                    <input name="inputItem" value={this.state.inputItem} onChange={this.handleInputChange} />
                    <p>Price</p>
                    <input name="inputPrice" value={this.state.inputPrice} onChange={this.handleInputChange} />
                    <p></p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default InputForm;