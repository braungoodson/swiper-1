var app = angular.module('app',[]);


$(document).ready(function(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.swiper-pagination',
		paginationClickable: true,
		mode: 'horizontal'
	});
});