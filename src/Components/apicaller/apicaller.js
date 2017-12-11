
import React , { Component } from 'react';
import './apicaller.css';
import axios from 'axios';


export default class apiCaller extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            searchMovie: '',
            movies: []


        };
        // this.getData = this.getData.bind(this);
    }


// getData(){
//     console.log(this.state.searchMovie);
//     axios.get('/api/getData', {searchMovie: this.state.searchMovie})
//     .then(response => {
//         console.log(response);
//         return this.setState({movies: response.data.results});

//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

render() {
    return (
        <div className='container'>
       

                       <input className='inputLine' placeholder='Search Movies' onChange={event => {this.setState({ searchMovie: event.target.value });
					}}
				/>
                <button className='button' onClick={()=>this.props.getData(this.state.searchMovie)}> Search Movies </button>
                <h3> {this.state.movie} </h3>
                </div>

       
    )
};
}
