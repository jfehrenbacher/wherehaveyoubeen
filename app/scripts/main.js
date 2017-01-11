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

$(document).ready(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(500);
})

$('.minibox').click(function() {
	$(this).toggleClass('selected');
	var targetClass = $(this).data("target-toggle");
	var targetElement = $("." + targetClass);
	if (targetElement.hasClass('noshow') ) { 
	targetElement.addClass('show').removeClass('noshow');
	} else {
		targetElement.removeClass('show').addClass('noshow');
	} 
	var cap = $('.selected.cap').length;
	console.log('Capitol Hill Venues:' + cap);
	var fre = $('.selected.fre').length;
	console.log('Fremont Venues:' + fre);
	var bal = $('.selected.bal').length;
	console.log('Ballard Venues:' + bal);
	var udist = $('.selected.udist').length;
	console.log('U District Venues:' + udist);
	var downtown = $('.selected.downtown').length;
	console.log('Downtown Venues:' + downtown);
	var columbia = $('.selected.columbia').length;
	console.log('Columbia Venues:' + columbia);
	var sodo = $('.selected.sodo').length;
	console.log('SODO Venues:' + sodo);
	var neighborhoodarray = [cap, fre, bal, udist, downtown, columbia, sodo];
	console.log(neighborhoodarray);
	var largest = Math.max.apply(Math, neighborhoodarray);
	console.log(largest);
	var smallest = Math.min.apply(Math, neighborhoodarray);
	console.log(smallest);
	if (largest == cap) {
		localStorage.setItem('largest', 'caphill');
	} else if (largest == fre) {
		localStorage.setItem('largest', 'fremont');
	} else if (largest == bal) {
		localStorage.setItem('largest', 'ballard');
	} else if (largest == udist) {
		localStorage.setItem('largest', 'udistrict');
	} else if (largest == downtown) {
		localStorage.setItem('largest', 'downtown');
	} else if (largest == columbia) {
		localStorage.setItem('largest', 'columbia');
	} else if (largest == sodo) {
		localStorage.setItem('largest', 'sodo');
	} 
});

// $('.submitbutton').click(function() {
// 	var bigstorage = localStorage.getItem('largest');
// 	if (bigstorage = 'caphill') {
// 		$('#caphillpage').removeClass('noshow').addClass('show');
// 	}
// })

$(document).ready(function() {
	var bigstorage = localStorage.getItem('largest');
	if (bigstorage =='caphill') {
		$('#caphillpage').removeClass('noshow').addClass('show');
		$('#caphilllist').removeClass('show').addClass('noshow');
	} else if (bigstorage == 'fremont') {
		$('#frepage').removeClass('noshow').addClass('show');
		$('#frelist').removeClass('show').addClass('noshow');
	} else if (bigstorage == 'ballard') {
		$('#balpage').removeClass('noshow').addClass('show');
		$('#ballist').removeClass('show').addClass('noshow');
	} else if (bigstorage == 'udistrict') {
		$('#udistpage').removeClass('noshow').addClass('show');
		$('#udistlist').removeClass('show').addClass('noshow');
	} else if (bigstorage == 'downtown') {
		$('#dtpage').removeClass('noshow').addClass('show');
		$('#dtlist').removeClass('show').addClass('noshow');
	} else if (bigstorage == 'columbia') {
		$('#ccpage').removeClass('noshow').addClass('show');
		$('#cclist').removeClass('show').addClass('noshow');
	} else if (bigstorage == 'sodo') {
		$('#sodopage').removeClass('noshow').addClass('show');
		$('#sodolist').removeClass('show').addClass('noshow');
	} 
})

function initMap() {
        var neumos = {lat: 47.613843, lng: -122.319715999};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: neumos
        });
        var marker = new google.maps.Marker({
          position: neumos,
          map: map
        });
      }


// $('.minibox').click(function classCount() {
// 	var cap = ($('.selected.cap').length);
// 	console.log('Capitol Hill Venues:' + cap);
// 	var name = $(this).attr('id');
// 	// var id = 1;
// 	// var test = localStorage.getItem("test");
// 	// var obj = [];
// 	// if(test){
// 	// 	obj= JSON.parse(test);
// 	// }
// 	// obj.push({"id": id, "name":name});
// 	// localStorage.setItem("test", JSON.stringify(obj));
// 	console.log(name);
// });




// $('#clickMe').click(function(event) {
//     var mytext = $('#myText').val();


//     $('<div id="dialog">'+mytext+'</div>').appendTo('#page');        
//     event.preventDefault();

//         $("#dialog").dialog({                   
//             width: 600,
//             modal: true,
//             close: function(event, ui) {
//                 $("#dialog").remove();
//                 }
//             });
//     }); //close click


