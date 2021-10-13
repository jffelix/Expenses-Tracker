import React from 'react';
import YearListItem from '../sub-components/YearListItem.jsx';

class YearList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yearArrayList: [],
            yearsList: [],
            itemList: []
        }

        this.convertYearListToArray = this.convertYearListToArray.bind(this);
        // this.filterYearsFromList = this.filterYearsFromList.bind(this);
    }

    componentDidMount() {
        this.convertYearListToArray();
    }

    convertYearListToArray() {

        var convertToArray = Object.entries(this.props.yearList);

        this.setState({
            yearArrayList: convertToArray
        }, () => {

            console.log('convertToArray: ', convertToArray);
        })

    }

    // filterYearsFromList() {

    //     var filteredYears = [];
    //     var filteredItems = [];

    //     for (var key in this.state.yearArrayList) {
    //         var yearValuePair = this.state.yearArrayList[key];
    //         // console.log('yearValuePair: ', yearValuePair);
    //         for (var year in yearValuePair) {
    //             filteredYears.push(year);
    //             filteredItems.push(yearValuePair[year]);
    //         }
    //     }

    //     this.setState({
    //         yearsList: filteredYears,
    //         itemList: filteredItems
    //     }, () => {
    //         console.log('yearsList: ', this.state.yearsList);
    //         console.log('itemList: ', this.state.itemList);
    //     })

    // }

    render() {

        return (

            <div>
                {this.state.yearArrayList.map((item, index) =>
                    <YearListItem years={item[0]} items={item[1]} key={index} />
                )}
            </div>
        )
    }
    
}

// var YearList = (props) => {

//     var yearArray = [];

//     for (var key in props.yearList) {

//         yearArray.push({
//             [key]: props.yearList[key]
//         })

//     }

//     console.log('yearArray: ', yearArray);

//     return (
//         <div>
//             <h4>Hello from YearList Component!</h4>
//             {yearArray.map((item, index) => 
//                 <YearListItem year={item} key={index} />
//             )}
//         </div>
//     )

// }

export default YearList;