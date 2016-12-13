console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


// $('.minibox').on('click', function (){
// 	var txt = $(this).attr('name');
// 	$('ul').append("<li class='list'>"+txt+"</li>");
// 	$(this).toggleClass('selected');
// 	// $('li').toggleClass(this).attr('id');

// });


// $('#dialog').dialog({ autoOpen: false })
// $('.list').click(function() {
// 	$('#dialog').dialog({
// 		modal:true,
// 	});
// 	$('#dialog').dialog('open');
// });

$('.minibox').click(function() {
	$(this).toggleClass('selected');
	var targetClass = $(this).data("target-toggle");
	var targetElement = $("." + targetClass);
	if (targetElement.hasClass('noshow') ) { 
	targetElement.addClass('show').removeClass('noshow');
	} else {
		targetElement.removeClass('show').addClass('noshow');
	} 
});