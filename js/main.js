// Swiper
function swiperTestimonials() {
	const swiper = new Swiper('.testimonials', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

// Hoverring
function mouseHover() {
	if (window.innerWidth >= 1024){
		let itemCursor = document.querySelector('.cursor-custom');
	
		document.addEventListener('mousemove', moveCursor);
	
		function moveCursor(e) {
			let x = e.clientX;
			let y = e.clientY;
			
			itemCursor.style.left = `${x}px`;
			itemCursor.style.top = `${y}px`;
		}
	
		let links = Array.from(document.querySelectorAll('.m-zoom'));
	
		links.forEach((link) => {
			itemCursor.classList.remove('view-project');
	
			link.addEventListener('mouseover', () => {
				itemCursor.classList.add('grow');
			});
			link.addEventListener('mouseleave', () => {
				itemCursor.classList.remove('grow');
			});
		})
	
		let projects = Array.from(document.querySelectorAll('.card-hover'));
	
		projects.forEach((project) => {
			itemCursor.classList.remove('grow');
	
			project.addEventListener('mouseover', () => {
				itemCursor.classList.add('view-project');
			});
			project.addEventListener('mouseleave', () => {
				itemCursor.classList.remove('view-project');
			});
		})
	}
};

// Open GNB
function mobileGnbOpen() {
	let btnMenu = document.querySelector('.nav .btn-mobile');

	btnMenu.addEventListener('click', () => {
		let thisExpanedStatus = btnMenu.getAttribute('aria-expanded');

		if (thisExpanedStatus == 'false') {
			btnMenu.classList.add('is-active');
			btnMenu.closest('.wrap').classList.add('is-open');
			btnMenu.setAttribute('aria-expanded', true);
		} else {
			btnMenu.classList.remove('is-active');
			btnMenu.closest('.wrap').classList.remove('is-open');
			btnMenu.setAttribute('aria-expanded', false);
		}
	});
};

document.addEventListener('DOMContentLoaded', function () {
	swiperTestimonials();
	mobileGnbOpen();
	mouseHover();
});

// window.addEventListener('resize', mouseHover);