
import React , { Component } from 'react';

import axois from 'axios';

import './styles.css';

export default class apiCaller extends Component {

    constructor(props){
        super(props);

        this.state = {
            movie: []


        };
        this.getApiData = this.getApiData.bind(this);
    }


getApiData(){
    axios.get('/api/getApiData', {movie: this.state.movie})
    .then(response => {
        return this.setState({movie: response.data});

    })
    .catch(error => {
        console.log(error);
    });
}

render() {
    return (
        <div className='container'>

        <h1 className='redColor'></h1>
        <p>{''}We'll pass this data to our backend in the form of
						req.body. We'll then use this data in our Weather API to
						get back a brief summary of the weather today.{" "}</p>

                        <input onChange={event => {this.setState({ movie: event.target.value });
					}}
				/>
                <button onClick={this.getApiData}> Get Api Data </button>
                <h3> {this.state.movie} </h3>
                </div>

       
    )
};
}
