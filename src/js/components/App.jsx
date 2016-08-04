import React, {Component} from 'react';
import AppActions from '../actions/appActions.jsx';
import AppStore from '../stores/appStore.jsx';
import SearchForm from './SearchForm.jsx';
import MovieResults from './MovieResults.jsx';

class App extends Component{

	

	constructor(props){
		super(props);
		this.state = this.getAppState();
		this._onChange = this._onChange.bind(this);
	}

	getAppState(){

		return{ movies: AppStore.getMovieResults() };
	}

	componentDidMount(){
		AppStore.addChangeListener(this._onChange);
	}

	componentWillMount(){
		AppStore.removeChangeListener(this._onChange);
	}

	_onChange(){
		this.setState(this.getAppState);
	}

	render(){


		if(this.state.movies==''){
			var movieResults='';

		}
		else{
			var movieResults=<MovieResults movies={this.state.movies}/>;
		}
		return(
			<div>
			<SearchForm />
			{movieResults}	
			</div>	
			)

		
		
	}
}

export default App;