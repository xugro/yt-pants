/// youtube-pants.js
/// alias yt-pants.js
(function() {
	let needle = "{{1}}";
	console.log(needle);
//	console.log("injection successful");
	(function loop(){
		setTimeout(() => {
			var flag = false;
			const path = window.location.pathname;
			const components = path.split("/");
			console.log(components);
			if(components.length >= 2){
				const channelname = components[1];
				console.log(channelname);
			}
			if(flag == true){
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
