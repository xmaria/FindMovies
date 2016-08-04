import React, {Component} from 'react';
import AppActions from '../actions/appActions.jsx';
import AppStore from '../stores/appStore.jsx';


class Movie extends Component{

	 
	render(){

		var link="http://www.imdb.com/title/"+this.props.movie.imdbID;
		return(
			<div className="well">
				<div className="row">
     			<div className="col-md-8">
				<h4><strong> {this.props.movie.Title}</strong>(<span>{this.props.movie.Year}</span>)</h4>
				</div>
				<div className="col-md-4">

				
  				<button className="btn btn-info pull-right" disabled><h5><span className="glyphicon glyphicon-star"></span><strong>{this.props.movie.imdbRating}</strong>/10
				</h5>
				</button>
				</div>
				</div> 				
				<hr />
				<div className="row">
					<div className="col-md-4">
						<img className="thumbnail" src={this.props.movie.Poster} />
					</div>
					<div className="col-md-8">
						<ul className="list-group">


							<li className="list-group-item">
								<h6><strong>Plot</strong></h6>
								<p>{this.props.movie.Plot}</p>
							</li>
							<li className="list-group-item">
							<h6><strong>Directors: </strong></h6><span>{this.props.movie.Director}</span>
							</li>
							<li className="list-group-item">
							<h6><strong>Stars: </strong></h6><span>{this.props.movie.Actors}</span>
							</li>

						</ul>
						<a className="btn btn-primary" href={link}>View on IMDB</a>
					</div>
				</div>
			</div>	
			)
	}

	
}

export default Movie;