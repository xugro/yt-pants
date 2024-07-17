/// youtube-pants.js
/// alias yt-pants.js
(function() {
	let needle = "{{1}}";
	console.log(needle);
//	console.log("injection successful");
	(function loop(){
		setTimeout(() => {
			var flag = false;
			if(needle != "{{1}}"){
				const path = window.location.pathname;
				console.log(path);
			}
			if(needle == "{{1}}" || flag == true){
				var tabs = document.getElementsByClassName("yt-tab-shape-wiz");
//				console.log("Loaded " + tabs.length + " tabs");
				for(const element of tabs){
//					console.log(element);
					for(const child of element.children){
						if(child.innerText == "Videos"){
							child.innerText = "Pants";
						}
					}
				}
			}
			loop();
		}, 500);
	})();
})();
