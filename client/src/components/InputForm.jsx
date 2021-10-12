import React from 'react';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
                <form>
                    <p>Item</p>
                    <input name="inputItem" onChange={this.handleInputChange} value={this.state.inputItem} />
                    <p>Price</p>
                    <input name="inputPrice" onChange={this.handleInputChange} value={this.state.inputPrice} />
                </form>
            </div>
        )
    }

}

export default InputForm;