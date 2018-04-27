$('#navigation li a.submenu').on('click', function(){
    $(this).find('~ ul li').slideToggle('slow');
    $(this).toggleClass('activeMenu notActiveMenu');
});

$('#RSbutton').on('click', function(){
        $('#contentContainer').load('https://raw.githubusercontent.com/deridara/accumulated-changes/master/content.html #panoramaContainer');
});

$('#BFbutton').on('click', function(){
        $('#contentContainer').load('https://raw.githubusercontent.com/deridara/accumulated-changes/master/content.html #breakfastContainer');
});
