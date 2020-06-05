function hoverLogo(element) {
  element.setAttribute('src', 'img/logohover.png');
}

function unhoverLogo(element) {
  element.setAttribute('src', 'img/logo.png');
}

function hoverVK(element) {
  element.setAttribute('src', 'img/vkbuttonhover.png');
}

function unhoverVK(element) {
  element.setAttribute('src', 'img/vkbutton.png');
}

function hoverInstagram(element) {
  element.setAttribute('src', 'img/instagrambuttonhover.png');
}

function unhoverInstagram(element) {
  element.setAttribute('src', 'img/instagrambutton.png');
}

function hoverYouTube(element) {
  element.setAttribute('src', 'img/youtubebuttonhover.png');
}

function unhoverYouTube(element) {
  element.setAttribute('src', 'img/youtubebutton.png');
}

const logo = document.getElementById("my-img");

const toggleZoom = () => {
	if (window.scrollY >= 200) {
		logo.classList.add("my-img-scrolled");
		logo.classList.remove("my-img-scrolled-top");
	}
	if (window.scrollY === 0) {
		logo.classList.add("my-img-top");
		logo.classList.remove("my-img-scrolled");
	}
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    logo.classList.add("my-img-scrolled");
} else {
	if (window.scrollY >= 200) {
		logo.classList.add("my-img-scrolled");
		logo.classList.remove("my-img-scrolled-top");
	}
	window.addEventListener("scroll", toggleZoom, {passive: true});
}