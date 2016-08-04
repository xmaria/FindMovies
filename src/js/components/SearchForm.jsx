import React, {Component} from 'react';
import AppActions from '../actions/appActions.jsx';
import AppStore from '../stores/appStore.jsx';


class SearchForm extends Component{


	onSubmit(e){
		e.preventDefault();
		let movie= {
			title: this.refs.title.value.trim()
		}
		AppActions.searchMovies(movie);

	}
	 
	render(){
		return(
			
			<div className="row">
            <div className="col-md-8 col-md-offset-2">
			<div className="search-form">
			<h2 className="text-center">Search For a Movie</h2>
			<br/>
			<form onSubmit={this.onSubmit.bind(this)}>
			<div className="input-group col-md-12">
                                <input type="text" className="form-control" placeholder="Search Movie" ref="title" />
                                <span className="input-group-btn">
                                    <button className="btn btn-danger">
                                        <span className=" glyphicon glyphicon-search"></span>
                                    </button>
                                </span>

                            </div>
			</form>
			</div>	
			</div>
			</div>
			)
	}

	
}

export default SearchForm;