import React from 'react';
import InputForm from './components/InputForm.jsx';
import EntryList from './components/EntryList.jsx';
import YearList from './components/YearList.jsx';

import entrySeeds from '../../server/seeds.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: entrySeeds,
            // itemList: [],
            yearList: null,
            wasIntroButtonClicked: false,
            inputItem: '',
            inputPrice: '',
            totalPrice: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTotal = this.addTotal.bind(this);
        // this.addTotalDay = this.addTotalDay.bind(this);
        // this.addTotalMonth = this.addTotalMonth.bind(this);
        // this.addTotalYear = this.addTotalYear.bind(this);
        this.categorizeByYear = this.categorizeByYear.bind(this);
    }

    componentDidMount() {
        this.addTotal();
        this.categorizeByYear();
    }

    handleInputChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            console.log('inputItem: ', this.state.inputItem);
        })

    }

    addTotal() {
        var totalPrice = 0;

        this.state.itemList.forEach(item => {
            totalPrice += item.price
        })

        this.setState({
            totalPrice: totalPrice.toFixed(2)
        })
    }

    categorizeByYear() {

        var yearObj = {};

        this.state.itemList.forEach(item => {
            var splitDate = item.date.split(' ');
            if (yearObj[splitDate[2]] === undefined) {
                yearObj[splitDate[2]] = [item];
            } else {
                yearObj[splitDate[2]].push(item);
            }
            // console.log('splitDate: ', splitDate);
        })

        this.setState({
            yearList: yearObj
        }, () => {
            console.log('yearList: ', this.state.yearList);
        })
        // console.log('yearObj: ', yearObj);
    }

    render() {

        if (this.state.yearList === null) {
            return (
                <div>
                    <h2>Loading . . .</h2>
                </div>
            )

        } else {

            return (
                <div>
                    <h3>Add an item</h3>
                    <div>
                        <InputForm />
                    </div>
                    {/* <EntryList list={this.state.itemList} />
                    <h2>Total: {this.state.totalPrice}</h2> */}
                    <div>
                        <YearList yearList={this.state.yearList} />
                    </div>
                    <div>
                        <h2>Total Expenses: {this.state.totalPrice}</h2>
                    </div>
                </div>
            )
        }

    }
}

export default App;