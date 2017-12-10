import React , { Component } from 'react';
import './body.css';
import axios from 'axios';


export default class body extends Component {

    constructor(props){

        super(props)

        this.state = {
            movie: {
                genres: [],
                credits: {
                    cast: [],
                    crew: []
                }

            }

        }
// this.getData = this.getDat.abind(this);
    }

    // getData(){
    //     axios.post(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`)
    //     .then(response => {
    //         if (response.status !== 200) {
    //           console.log('Error: ' + response.status);
    //           return;
    //         }
    
    //         response.json().then(data => {
    //           const movie = data;
    //           this.setState({ movie });
    //         });
    
    //       })
    //       .catch(err => {
    //         console.log('Fetch Error :-S', err);
    //       })
    //   }
    
    //   componentDidMount() {
    //     this.getData();
    // }
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.movie !== this.state.movie) {
    //       this.getData();
    //     }
    //   }







render() {
    return (
        <div className='container'>
           <div className='results'>
           <div className='display-info'>
           </div>
           <div className='display-video'>
           </div>
        
        
        
        
        
        
           </div>
        </div>

       
    )
};
}