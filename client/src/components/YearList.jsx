import React from 'react';
import YearListItem from '../sub-components/YearListItem.jsx';
import '../../dist/styles.css';

class YearList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yearArrayList: [],
            yearsList: [],
            itemList: []
        }

        this.convertYearListToArray = this.convertYearListToArray.bind(this);
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

    render() {

        return (

            <div>
                {this.state.yearArrayList.map((item, index) =>
                    <YearListItem 
                    years={item[0]} 
                    items={item[1]} 
                    key={index}
                    showAllItems={this.props.showAllItems} />
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


// CHECK TO SEE IF CAN BE CHANGED TO FUNCTIONAL COMPONENT