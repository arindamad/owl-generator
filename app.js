$('.genarateBtn').on('click', function(){
    // for item 
    var x = $('#noItem').val();
    if(x==0){
      x = 1;
    }
    var customMargin =0;
    customMargin= parseInt($('#margin').val());
    if(isNaN(customMargin)){
      customMargin =0;
    } 
     console.log(customMargin);

    // for looping object 
    var custloop = JSON.parse($('input[name=loop]:checked').val());
    console.log(custloop);

    // nav true or flase
    var aNav = JSON.parse($('input[name=nav]:checked').val());
    
    // center
    var aCenter = JSON.parse($('input[name=center]:checked').val());

    owl.owlCarousel('destroy');
    
    owl.owlCarousel({
      items: x,
      loop:true,
      margin: customMargin,      
      loop: custloop,
      nav: aNav,
      center:aCenter, 
      
      
    });
});



//get code formula

$('.getCode').on('click', function(){
    $('body').css('overflow', 'hidden');

    $('.aCustomModal').fadeIn();
    // for item 
    var x = $('#noItem').val();
    if(x==0){
      x = 1;
    }
    var customMargin =0;
    customMargin= parseInt($('#margin').val());
    if(isNaN(customMargin)){
      customMargin =0;
    } 
     console.log(customMargin);

    // for looping object 
    var custloop = JSON.parse($('input[name=loop]:checked').val());
    console.log(custloop);

    // nav true or flase
    var aNav = JSON.parse($('input[name=nav]:checked').val());
    
    // center
    var aCenter = JSON.parse($('input[name=center]:checked').val());

    $('code').text(`
    <script>
      $('.arModified').owlCarousel({ 
        items: `+x+`, 
        loop:`+custloop+`,
        margin: `+customMargin+`,      
        loop: `+custloop+`,
        nav: `+aNav+`,
        center:`+aCenter+`, 
      });
      </script>
      `
    );
});
$('.aCustomModal').on('click', function(){
  $(this).fadeOut();
});
$('.closeBtn').on('click', function(){
  $(this).closest('.aCustomModal').fadeOut();
});
$('.modalInnr').on('click', function(e){
  e.stopPropagation();
});