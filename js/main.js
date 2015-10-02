$(document).ready(function(){

	var contenido = $("#content"),
		list_group = $("#list-group");

	list_group.delegate('a', 'click', function(e){
		var href = $(this).attr('href');
		contenido.load( href + ' #blog-post' );
		e.preventDefault();
	});
});

