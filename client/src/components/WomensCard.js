import React from 'react';

class WomensCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Country: {this.props.country}</p>
                <p>Searches: {this.props.searches}</p>
            </div>
        );
    }
}

export default WomensCard;