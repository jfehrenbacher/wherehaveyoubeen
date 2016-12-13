console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$('.minibox').on('click', function (){
	var txt = $(this).attr('name');
	$('ul').append("<li class='list'>"+txt+"</li>");
	$(this).attr
	$(this).toggleClass('selected');
});

$('ul').on('click','.list', function(){
	$(this).remove();
});

