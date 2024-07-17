/// youtube-pants.js
/// alias yt-pants.js
(function() {
	console.log("injection successful");
	(function loop(){
		setTimeout(() => {
			var tabs = document.getElementsByClassName("yt-tab-shape-wiz");
			console.log("Loaded " + tabs.length + " tabs");
			for(const element of tabs){
				console.log(element);
			}

			if(tabs.length == 0){
				loop();
			}
		}, 100);
	})();
})();
