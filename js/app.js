$(document).ready(function () {
 
    var scrollEl= $('.scroll');
    var liEle = $('.characters li');
    var divEle = $('.charactersGallery div');
    var div2Ele = $('.charactersGallery2 div');
    var slide2 = $('.second-slide');
    var slide3 = $('.third-slide');
    var slide4 = $('.fourth-slide');
    var slide5 = $('.fifth-slide');
    var slide6 = $('.sixth-slide');
    var menu = $('.hamburger-shell');
    var row = $('.row');
    console.log(liEle);
    console.log(divEle);
    
    $(scrollEl).on('click', function(){
        $(scrollEl).css('background-image','url(img/pergaminone.gif)');
        $(row).fadeOut( 1 ).delay( 3750 ).fadeIn( 1200 );
        $(scrollEl).delay(3750).queue(function(){
            $(this).addClass('nonvisible');
            $(slide2).removeClass('nonvisible');
            $(slide3).removeClass('nonvisible');
            $(slide4).removeClass('nonvisible');
            $(slide5).removeClass('nonvisible');
            $(slide6).removeClass('nonvisible');
            $(menu).removeClass('nonvisible');
            
        });
    })
    $(liEle).on('click', function(){
        var thisTab = $(this).index();
        $(divEle).hide();
        // liEle.removeClass('selected');
        // $(this).addClass('selected');
        // $(divEle[thisTab]).addClass('selected');
        $(divEle[thisTab]).fadeIn(600);
        console.log($(divEle[thisTab]));
        console.log('działa');
    });
    $(liEle[4]).on('dblclick', function(){
        var thisTab = $(this).index();
        console.log($(divEle[4]));
        console.log($(div2Ele[0]))
        $(divEle[4]).hide();
        $(div2Ele[0]).fadeIn(600);
   });
//Paralax
$(window).on('scroll',function(){
console.log(Math.round(window.scrollY));
$('body').css({
    'background-position-y': Math.round(window.scrollY)
})

});
//Paralax


    var span1El = $('.pergamin span');
    var frame1El = $('.frame img');
    var spans = $('span');
    console.log(span1El);
    console.log(frame1El);
    
        $(span1El).on('click', function(){ 
            $(frame1El).hide();
            $(`img.${$(this).attr('class')}`).fadeIn(600);
            console.log(this);           
        });
//menu

	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})


//menu
//scrolling
$('a').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2500);
        });
//scrolling        
});