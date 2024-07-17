/// youtube-pants.js
/// alias yt-pants.js
(function() {
	console.log("injection successful");
	var tabs = document.getElementsByClassName("yt-tab-shape-wiz");
	console.log("Loaded " + tabs.length + " tabs");
	while( tabs.length == 0 ){
		tabs = document.getElementsByClassName("yt-tab-shape-wiz");
	}
	for(const element of tabs){
		console.log(element);
	}
})();
