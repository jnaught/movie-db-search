
import React , { Component } from 'react';
import './apicaller.css';
import axios from 'axios';


export default class apiCaller extends Component {

    constructor(props){
        super(props);

        this.state = {
            searchMovie: ''


        };
        this.getApiData = this.getApiData.bind(this);
    }


getApiData(){
    axios.post('/api/getApiData', {searchMovie: this.state.searchMovie})
    .then(response => {
        return this.setState({searchMovie: response.data});

    })
    .catch(error => {
        console.log(error);
    });
}

render() {
    return (
        <div className='container'>
       

                       <input className='inputLine' placeholder='Search Movies' onChange={event => {this.setState({ movie: event.target.value });
					}}
				/>
                <button className='button' onClick={this.getApiData}> Search Movies </button>
                <h3> {this.state.movie} </h3>
                </div>

       
    )
};
}
