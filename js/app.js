$(document).ready(function () {
 
    var scrollEl= $('.scroll');
    var liEle = $('.characters li');
    var divEle = $('.charactersGallery div');
    var slide2 = $('.second-slide');
    var slide3 = $('.third-slide');
    var slide4 = $('.fourth-slide');
    var slide5 = $('.fifth-slide');
    var slide6 = $('.sixth-slide');
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

    var span1El = $('.pergamin1 span');
    var frame1El = $('.frame1 img');
    console.log(span1El);
    console.log(frame1El);
    
        $(span1El).on('click', function(){
            var thisTab = $(this).index();
            $(frame1El).hide();
            $(frame1El[thisTab]).fadeIn(600);
            console.log($(frame1El[thisTab]));
        });

    var span2El = $('.pergamin2 span');
    var frame2El = $('.frame2 img');
    console.log(span2El);
    console.log(frame2El);
    
        $(span2El).on('click', function(){
            var thisTab = $(this).index();
            $(frame2El).hide();
            $(frame2El[thisTab]).fadeIn(600);
            console.log($(frame2El[thisTab]));
        });

    var span3El = $('.pergamin3 span');
    var frame3El = $('.frame3 div');
    console.log(span3El);
    console.log(frame3El);
    
        $(span3El).on('click', function(){
            var thisTab = $(this).index();
            $(frame3El).hide();
            $(frame3El[thisTab]).fadeIn(600);
            console.log($(frame3El[thisTab]));
        });

    var span4El = $('.pergamin4 span');
    var frame4El = $('.frame4 div');
    console.log(span4El);
    console.log(frame4El);
    
        $(span4El).on('click', function(){
            var thisTab = $(this).index();
            $(frame4El).hide();
            $(frame4El[thisTab]).fadeIn(600);
            console.log($(frame4El[thisTab]));
        });
    
    var span5El = $('.pergamin5 span');
    var frame5El = $('.frame5 div');
    console.log(span5El);
    console.log(frame5El);
    
        $(span5El).on('click', function(){
            var thisTab = $(this).index();
            $(frame5El).hide();
            $(frame5El[thisTab]).fadeIn(600);
            console.log($(frame5El[thisTab]));
        });
});