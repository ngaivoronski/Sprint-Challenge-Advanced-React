import React from 'react';

class WomensCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="woman-card-div">
                <h2 data-testid="name-display">{this.props.name}</h2>
                <p data-testid="country-display">Country: {this.props.country}</p>
                <p data-testid="searches-display">Searches: {this.props.searches}</p>
            </div>
        );
    }
}

export default WomensCard;