import React, {Component} from 'react';
import AppActions from '../actions/appActions.jsx';
import AppStore from '../stores/appStore.jsx';
import Movie from './Movie.jsx';

class MovieResults extends Component{

	 
	render(){
		return(
			
			<div className="row">
			<div className="col-md-10 col-md-offset-1">
				<h3><strong>RESULTS</strong></h3>
				{
					this.props.movies.map((movie)=>{
						return(
							<Movie movie={movie} key={movie.imdbID} />
							)
					})
				}
			</div>	
			</div>
			)
	}

	
}

export default MovieResults;