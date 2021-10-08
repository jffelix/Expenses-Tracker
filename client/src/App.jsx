import React from 'react';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wasIntroButtonClicked: false
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to Expenses Tracker from App Component!</h1>
            </div>
        )
    }
}

export default App;