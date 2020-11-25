// Smooth scroll
if ($('#scroll-container').length > 0) {
	var html = document.documentElement;
	var body = document.body;
	var scroller = {
	target: document.querySelector("#scroll-container"),
	ease: 0.09, // <= scroll speed
	endY: 0,
	y: 0,
	resizeRequest: 1,
	scrollRequest: 0,
	};
	var requestId = null;
	TweenLite.set(scroller.target, {
	rotation: 0.01,
	force3D: true
	});
	window.addEventListener("load", onLoad);
	function onLoad() {
	updateScroller();
	window.focus();
	window.addEventListener("resize", onResize);
	document.addEventListener("scroll", onScroll);
	}
	function updateScroller() {
	var resized = scroller.resizeRequest > 0;
	if (resized) {
		var height = scroller.target.clientHeight;
		body.style.height = height + "px";
		scroller.resizeRequest = 0;
	}
	var scrollY = window.page__bookYOffset || html.scrollTop || body.scrollTop || 0;
	scroller.endY = scrollY;
	scroller.y += (scrollY - scroller.y) * scroller.ease;
	if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
		scroller.y = scrollY;
		scroller.scrollRequest = 0;
	}
	TweenLite.set(scroller.target, {
		y: -scroller.y
	});
	requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
	if($('#trending_title')){
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			var height = scroller.target.clientHeight;
			body.style.height = height + "px";
			scroller.resizeRequest = 0;
		}
	}
	}
	function onScroll() {
	scroller.scrollRequest++;
	if (!requestId) {
		requestId = requestAnimationFrame(updateScroller);
	}
	}
	function onResize() {
	scroller.resizeRequest++;
	if (!requestId) {
		requestId = requestAnimationFrame(updateScroller);
	}
	}
}