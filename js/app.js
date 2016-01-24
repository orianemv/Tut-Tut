'use strict'
$(document).ready(function() {
	var pingouin = {
		p1 :function(){
			$('.bloc').hide;
			$("#boutton-top").on('click', function(){
				$("this").velocity
				({translateX: '600px', translateY: '600px'},500).velocity
				({translateX: '-50px', translateY: '-50px'},1000);
			});
			$('.boutton-top').on('mouseenter', function(){
				$(this).css("padding-top", "150px");
			});
			$('.boutton-top').on('mouseleave', function(){
				$(this).css("padding-top", "30px");
			});
			$('.boutton-top').on('click', function(){
				$('.bloc').show;
			});
			$('.container_circus').on('mouseenter', function(){
				$(this).velocity
				({rotateY: '180deg'},500).velocity
				({rotateY: '-180deg'},500);
			});
			$('.contenu1_friends').on('mouseenter', function(){
				$(this).velocity
				({translateX: '30%',rotateZ: '180deg'},1000).velocity
				({translateX: '-30%;', rotateZ: '-360deg'},1000);

			});
		}
	};
$(function(){
	var page = $('[x-page]').attr('x-page');
	pingouin[page]();
});
});