$('#navigation li a.submenu').on('click', function(){
    $(this).find('~ ul li').slideToggle('slow');
    $(this).toggleClass('activeMenu notActiveMenu');
});

$('#RSbutton').on('click', function(){
    $('#contentContainer').load('file:///Users/dara/BHSAD/FMP/FMP%20Site/index_RSpanorama.html');
});