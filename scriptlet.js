/// youtube-pants.js
/// alias yt-pants.js
(function() {
	console.log("injection successful");
	var tabs = document.getElementsByClassName("yt-tab-shape-wiz");
	console.log("Loaded " + tabs.length + " tabs");
	for(const element of tabs){
		console.log(element);
	}
})();
