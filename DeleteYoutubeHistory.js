function DeleteVideo() {
	let items = document.body.querySelectorAll(".ytd-menu-popup-renderer tp-yt-paper-item yt-formatted-string");
	items[2].childNodes[0].click();
}

async function OpenDropdown() {
	let dropdownOpeners = document.body.querySelectorAll("ytd-playlist-video-renderer .dropdown-trigger .yt-icon-button");
	
	for (let opener of dropdownOpeners) {
		opener.click();
		console.log("Video deleting")
		DeleteVideo();
		await new Promise(resolve => setTimeout(resolve, 700));		
	}
}

async function ClearPlaylist() {
	// To get all of the videos put after url: &disable_polymer=1
	
	// Reloads after every series of videos
	while (true) {
		await new Promise(resolve => setTimeout(resolve, 700));	
		OpenDropdown();
	//	location.reload();
	}
}

ClearPlaylist();
