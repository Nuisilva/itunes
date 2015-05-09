var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' 
  //so all your method you want to call in your controller need to be on 'this'.

  this.name = function(artist){
  	var dfd = $q.defer();
  	 $http ({
  		method: "JSONP",
  		url: 'https:itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'

  	}).then(function(response){
  		response = parseSongs(response.data.results);
  		console.log(response);
  		dfd.resolve(response);
  	})
  	 return dfd.promise;
  }
  var parseSongs = function(songs){
	var parseData=[];
	for (var i = 0; i < ; i--) {
	  var finalSongs = {}
	  parseData['Play'] = songs[i].previewUrl;
      parseData['Song'] = songs[i].trackname;
      parseData['Artist'] = songs[i].artistName;
      parseData['Collection'] = songs[i].collectionName;
      parseData['AlbumArt'] = songs[i].artworkUrl100;
      parseData['Type'] = songs[i].kind;
      parseData['Individual Price'] = songs[i].trackPrice;
      parseData['CollectionPrice'] = songs[i].collectionPrice;
      finalSongs.push(parseData);
	};

  }
});