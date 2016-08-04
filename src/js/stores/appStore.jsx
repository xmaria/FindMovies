import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import AppConstants from '../constants/appConstants.jsx';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';
import * as AppApi from '../util/appApi.jsx';

var _movies=[];
var _selected='';
var _movieDetails=[];

const CHANGE_EVENT = 'change';

class AppStoreClass extends EventEmitter{
 

  setMovieResults(movies){
    _movies=movies;

  }

  getMovieResults(){

    //console.log(_movies);
    return _movies;

  }


	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}


const AppStore =new AppStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {

      case AppConstants.SEARCH_MOVIES:
      console.log(`Searching for ${action.movie.title}`);
      AppApi.searchMovies(action.movie); 
      AppStore.emit(CHANGE_EVENT);
      break;

      case AppConstants.RECIEVE_MOVIE_RESULTS:
      AppStore.setMovieResults(action.movies);
      AppStore.emit(CHANGE_EVENT);
      break;

  	}
  	return true;
  });
export default AppStore;


