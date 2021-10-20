import React from 'react';
import moment from 'moment';
import '../../dist/styles.css';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputItem: '',
            inputPrice: []
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

        // parseFloat gives decimal, parseInt does not
        var convertToNum = parseFloat(this.state.inputPrice);

        var entryObj = {
            item: this.state.inputItem,
            price: convertToNum,
            date: moment().format('LL')
        }
        // console.log('entryObj: ', entryObj);
        this.props.addNewEntry(entryObj);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleInputSubmit} className="newEntry">
                    <p>Item</p>
                    <input name="inputItem" value={this.state.inputItem} onChange={this.handleInputChange} />
                    <p>Price</p>
                    <input name="inputPrice" value={this.state.inputPrice} onChange={this.handleInputChange} />
                    <p></p>
                    <button className="submitButton">Submit</button>
                </form>
            </div>
        )
    }

}

export default InputForm;