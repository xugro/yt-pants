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
				for(const child of element.children){
					if(child.innerText == "Videos"){
						child.innerText = "Pants";
					}
				}
			}
			loop();
		}, 500);
	})();
})();
