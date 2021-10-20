import React from 'react';
import { render } from 'react-dom';
import DayListItem from './DayListItem.jsx';
import '../../dist/styles.css';

class MonthListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wasMonthDropdownClicked: false,
            monthTotal: null,
            dayObjToArray: []
        }

        this.calculateMonthTotal = this.calculateMonthTotal.bind(this);
        this.toggleMonthDropDown = this.toggleMonthDropDown.bind(this);
        this.categorizeByDay = this.categorizeByDay.bind(this);
    }

    componentDidMount() {
        this.calculateMonthTotal();
        this.categorizeByDay();
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

    categorizeByDay() {

        var dayObj = {};

        this.props.days.forEach(item => {
            var splitDate = item.date.split(' ');

            // Remove comma from day
            var splitDay = splitDate[1].split('');
            splitDay.pop();
            
            var dayNoComma = splitDay.join('');
            // console.log('dayNoComma: ', dayNoComma);

            if (dayObj[dayNoComma] === undefined) {
                dayObj[dayNoComma] = [item];
            } else {
                dayObj[dayNoComma].push(item);
            }
        })

        var dayObjToArray = Object.entries(dayObj);
        // console.log('dayObjToArray: ', dayObjToArray);
        this.setState({
            dayObjToArray: dayObjToArray
        }, () => {
            console.log('dayObjToArray: ', this.state.dayObjToArray);
        })
    }

    toggleMonthDropDown() {
        this.setState(prevState => ({
            wasMonthDropdownClicked: !prevState.wasMonthDropdownClicked
        }))
    }

    render() {

        if (!this.state.wasMonthDropdownClicked) {

            return (
                <div className="monthEntry">
                    <h3>{this.props.months}</h3>
        
                    <button className="expandMonth" onClick={this.toggleMonthDropDown}>Expand Month</button>
        
                    <div className="monthTotal">
                        <h4>Month Total: {this.state.monthTotal}</h4>
                    </div>
                </div>
            )

        } else {

            return (
                <div className="collapseMonth">
                    <h3>{this.props.months}</h3>
        
                    <button className="expandMonth" onClick={this.toggleMonthDropDown}>Collapse Month</button>

                    {this.state.dayObjToArray.map((day, index) =>
                        <DayListItem days={day[0]} items={day[1]} key={index} />
                    )}
        
                    <div className="monthTotal">
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