'use strict'
$(document).ready(function() {
	var pingouin = {
		p1 :function(){
			$("#b").on('click', function(){
				$("#car, #car2").velocity
				({translateX: '600px', translateY: '600px'},500).velocity
				({translateX: '-50px', translateY: '-50px'},1000);
			});
		}
	};
$(function(){
	var page = $('[x-page]').attr('x-page');
	pingouin[page]();
});
});