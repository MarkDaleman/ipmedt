
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigatie
		menu: false,
		lockAnchors: false,

		anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage',  '5thPage', '6thPage', '7thPage', '8thPage'],

		menu: '#menu',
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		normalScrollElements: '#element1, .element2',

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: false,
		resize : false,
		paddingTop: '4em',
		paddingBottom: '10px',
		responsiveWidth: 0,
		responsiveHeight: 0,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});