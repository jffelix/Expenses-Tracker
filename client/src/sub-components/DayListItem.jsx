import React from 'react';
import '../../dist/styles.css';
import IndividualItem from './IndividualItem.jsx';

var DayListItem = (props) => {

    return (
        <div className="dayEntry">
            <h4 className="centerDay">{props.days}</h4>

            {/* {props.items.map((item, index) => 
                <div key={index}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                    <button className="deleteItem">Delete Item</button>
                </div>
            )} */}

            <IndividualItem items={props.items} />
        </div>
    )
}

export default DayListItem;




// FUNCTIONAL COMPONENT BACKUP CODE


// var DayListItem = (props) => {

//     return (
//         <div className="dayEntry">
//             <h4 className="centerDay">{props.days}</h4>

//             {props.items.map((item, index) => 
//                 <div key={index}>
//                     <p>{item.item}</p>
//                     <p>{item.price}</p>
//                     <p>{item.date}</p>
//                     <button className="deleteItem">Delete Item</button>
//                 </div>
//             )}
//         </div>
//     )
// }




// // CLASS COMPONENT BACKUP CODE BELOW

// class DayListItem extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render() {

//         return (
//             <div className="dayEntry">
//                 <h4 className="centerDay">{this.props.days}</h4>
    
//                 {this.props.items.map((item, index) => 
//                     <div key={index}>
//                         <p>{item.item}</p>
//                         <p>{item.price}</p>
//                         <p>{item.date}</p>
//                         <button className="deleteItem">Delete Item</button>
//                     </div>
//                 )}
//             </div>
//         )

//     }
    
// }