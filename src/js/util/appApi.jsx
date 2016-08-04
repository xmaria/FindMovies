import AppActions from '../actions/appActions.jsx';
import request from 'superagent';

export function searchMovies(movie){

	var _movies=[];
	var _movieDetails=[];

	$.ajax({
		url: 'http://www.omdbapi.com/?s='+movie.title,
		dataType:'json',
		cache: false,
		success:function(data)
		{
            _movies=data.Search;
          	console.log(_movies.length);

          	for(var i =0 ;i< _movies.length;i++)
            {
            	console.log(_movies[i].imdbID);
            	
          		       $.ajax({
					   url: 'http://www.omdbapi.com/?i='+_movies[i].imdbID+'&plot=short',
					   dataType:'json',
					   cache: false,
					   async: false,
					   success:function(data){
			 		   _movieDetails.push(data);
					   }.bind(this),
					   error:function(xhr,status,err){
					   alert(err);
					   }.bind(this)
	 		           });   
	 		}    
	 		console.log(_movieDetails);
          	AppActions.recieveMovieResults(_movieDetails);
        
		}.bind(this),
		error:function(xhr,status,err){
			alert(err);
		}.bind(this)


	}); 


}
	
