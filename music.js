const songs = document.getElementsByTagName("audio");
//console.log(songs);

const pauseOtherSongs = (current) => {
	for (let i = 0; i < songs.length; i++){
		if (i != current) songs[i].pause();
	}
}

const addListenersToSongs = () => {
	for (let i = 0; i < songs.length; i++){
		songs[i].addEventListener("play", () => pauseOtherSongs(i));
	}
}

addListenersToSongs();

