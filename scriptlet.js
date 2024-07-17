/// youtube-pants.js
/// alias yt-pants.js
(function() {
	console.log("injection successful");
	(function loop(count = 0){
		setTimeout(() => {
			var tabs = document.getElementsByClassName("yt-tab-shape-wiz");
			console.log("Loaded " + tabs.length + " tabs");
			for(const element of tabs){
				console.log(element);
			}
			if(tabs.length == 0 && count < 5){ //only attempt 5 times as it loops outside a channel page
				loop(count + 1);
			}
		}, 500);
	})();
})();
