import React from 'react';
import { render } from 'react-dom';
import MonthListItem from './MonthListItem.jsx';

class YearListItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wasYearDropdownClicked: false,
            yearTotal: null,
            monthObjToArray: []
        }

        this.calculateYearTotal = this.calculateYearTotal.bind(this);
        this.categorizeByMonth = this.categorizeByMonth.bind(this);
        this.toggleYearDropdown = this.toggleYearDropdown.bind(this);
    }

    componentDidMount() {
        this.calculateYearTotal();
        this.categorizeByMonth();
    }

    calculateYearTotal() {
        // console.log('props.years: ', props.years);
        // console.log('props.items: ', props.items);
    
        // Calculate total expenses for year
        var yearTotal = 0;
    
        this.props.items.forEach(item => {
            yearTotal += item.price;
        })

        this.setState({
            yearTotal: yearTotal.toFixed(2)
        })
    }

    categorizeByMonth() {

        // Categorize items by month
        var monthObj = {};
    
        this.props.items.forEach(item => {
            var splitDate = item.date.split(' ');
            if (monthObj[splitDate[0]] === undefined) {
                monthObj[splitDate[0]] = [item];
            } else {
                monthObj[splitDate[0]].push(item);
            }
            // console.log('splitDate: ', splitDate);
        })
        // console.log('monthObj: ', monthObj);
    
        var monthObjToArray = Object.entries(monthObj);
        // console.log('monthObjToArray: ', monthObjToArray);
        this.setState({
            monthObjToArray: monthObjToArray
        })
    }

    toggleYearDropdown() {
        this.setState(prevState => ({
            wasYearDropdownClicked: !prevState.wasYearDropdownClicked
        }))
    }

    render() {

        if (!this.state.wasYearDropdownClicked) {

            return (
                <div>
                    <h2>{this.props.years}</h2>
        
                    <button onClick={this.toggleYearDropdown}>Expand Year</button>
        
                    <div>
                        <h3>Year Total: {this.state.yearTotal}</h3>
                    </div>
                </div>
            )

        } else {

            return (
                <div>
                    <h2>{this.props.years}</h2>
        
                    <button onClick={this.toggleYearDropdown}>Collapse Year</button>
        
                    {this.state.monthObjToArray.map((month, index) => 
                        <MonthListItem months={month[0]} days={month[1]} key={index} />
                    )}
        
                    <div>
                        <h3>Year Total: {this.state.yearTotal}</h3>
                    </div>
                </div>
            )

        }


    }


}

export default YearListItem;







// FUNCTIONAL COMPONENT BACKUP CODE BELOW


// var YearListItem = (props) => {
//     // console.log('props.years: ', props.years);
//     // console.log('props.items: ', props.items);

//     // Calculate total expenses for year
//     var yearTotal = 0;

//     props.items.forEach(item => {
//         yearTotal += item.price;
//     })

//     // Categorize items by month
//     var monthObj = {};

//     props.items.forEach(item => {
//         var splitDate = item.date.split(' ');
//         if (monthObj[splitDate[0]] === undefined) {
//             monthObj[splitDate[0]] = [item];
//         } else {
//             monthObj[splitDate[0]].push(item);
//         }
//         // console.log('splitDate: ', splitDate);
//     })
//     // console.log('monthObj: ', monthObj);

//     var monthObjToArray = Object.entries(monthObj);
//     // console.log('monthObjToArray: ', monthObjToArray);

//     return (
//         <div>
//             <h2>{props.years}</h2>

//             <button>Expand Year</button>

//             {monthObjToArray.map((month, index) => 
//                 <MonthListItem months={month[0]} days={month[1]} key={index} />
//             )}

//             <div>
//                 <h3>Year Total: {yearTotal.toFixed(2)}</h3>
//             </div>

//         </div>
//     )

// }