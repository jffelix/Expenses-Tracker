import React from 'react';
import { render } from 'react-dom';

class MonthListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wasMonthDropdownClicked: false,
            monthTotal: null
        }

        this.calculateMonthTotal = this.calculateMonthTotal.bind(this);
        this.toggleMonthDropDown = this.toggleMonthDropDown.bind(this);
    }

    componentDidMount() {
        this.calculateMonthTotal();
    }

    calculateMonthTotal() {
        // Calculate total expenses for month
        var monthTotal = 0;
    
        this.props.days.forEach(item => {
            monthTotal += item.price;
        })
        // console.log('monthTotal: ', monthTotal);
        this.setState({
            monthTotal: monthTotal
        })
    }

    toggleMonthDropDown() {
        this.setState(prevState => ({
            wasMonthDropdownClicked: !prevState.wasMonthDropdownClicked
        }))
    }

    // CATEGORIZE BY DAY HERE

    render() {

        if (!this.state.wasMonthDropdownClicked) {

            return (
                <div>
                    <h3>{this.props.months}</h3>
        
                    <button onClick={this.toggleMonthDropDown}>Expand Month</button>
        
                    <div>
                        <h4>Month Total: {this.state.monthTotal}</h4>
                    </div>
                </div>
            )

        } else {

            return (
                <div>
                    <h3>{this.props.months}</h3>
        
                    <button onClick={this.toggleMonthDropDown}>Collapse Month</button>
        
                    {this.props.days.map((item, index) =>
                        <div key={index}>
                            <p>{item.item}</p>
                            <p>{item.price}</p>
                            <p>{item.date}</p>
                            <button>Delete Item</button>
                        </div>
                    )}
        
                    <div>
                        <h4>Month Total: {this.state.monthTotal}</h4>
                    </div>
                </div>
            )

        }


    }

}

export default MonthListItem;








// FUNCTIONAL COMPONENT BACKUP CODE BELOW


// var MonthListItem = (props) => {

//     // Calculate total expenses for month
//     var monthTotal = 0;

//     props.days.forEach(item => {
//         monthTotal += item.price;
//     })
//     // console.log('monthTotal: ', monthTotal);

//     // CATEGORIZE BY DAY HERE

//     return (
//         <div>
//             <h3>{props.months}</h3>

//             {props.days.map((item, index) =>
//                 <div key={index}>
//                     <p>{item.item}</p>
//                     <p>{item.price}</p>
//                     <p>{item.date}</p>
//                     <button>Delete Item</button>
//                 </div>
//             )}

//             <div>
//                 <h4>Month Total: {monthTotal}</h4>
//             </div>
//         </div>
//     )
// }