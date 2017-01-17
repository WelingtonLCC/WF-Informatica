$(document).ready(function(){
	$(".menu-Icon").click(function(){
		$(".menu-side").toggleClass("menu-icon-right");
		$(".container-nav").toggleClass("menu-side-right");
		$(".menu .menu-Icon").toggleClass("fa-plus-square").toggleClass("fa-window-close");


	})
});