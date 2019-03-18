import React, { Component } from 'react';

class HomePage extends Component {
    static displayName = 'HomePage';
    
    constructor(props) {
        super(props);
        this.state = { isHere: true }
    }
    render() {
        return ( <div>Home</div> );
    }
}

export default HomePage;