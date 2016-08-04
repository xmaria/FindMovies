import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import AppConstants from '../constants/appConstants.jsx';

const AppActions = {
	searchMovies(movie){
		
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		});
	},

	recieveMovieResults(movies){
		console.log(movies);
		AppDispatcher.handleViewAction({

			actionType: AppConstants.RECIEVE_MOVIE_RESULTS,
			movies: movies
		});
	}


};



export default AppActions;