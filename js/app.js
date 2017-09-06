$(document).ready(function () {
 
    var liEle = $('.characters li');
    var divEle = $('.charactersGallery div');
    console.log(liEle);
    console.log(divEle);

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




});