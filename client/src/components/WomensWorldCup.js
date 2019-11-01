import React from 'react';
import axios from 'axios';
import WomensCard from './WomensCard';

class WomensWorldCup extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(response => {
            console.log(response.data);
            this.setState({
                data: response.data,
            })
            })
            .catch(error => {
            console.log(error);
            });
        this.setState({
            data: [],
        })
    }

    render() {
        console.log("rendering form");
        return (
            <div className="card-list-div">
                {this.state.data.map(athlete => {
                    return(<WomensCard name={athlete.name} country={athlete.country} searches={athlete.searches}/>)
                })}
            </div>
        );
    }
}

export default WomensWorldCup;


