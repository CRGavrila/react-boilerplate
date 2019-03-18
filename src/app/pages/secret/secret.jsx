import React, { Component } from 'react';

class SecretPage extends Component {
    static displayName = 'SecretPage';
    
    constructor(props) {
        super(props);
        this.state = { isHere: true }
    }
    render() {
        return ( <div>SecretPage</div> );
    }
}

export default SecretPage;