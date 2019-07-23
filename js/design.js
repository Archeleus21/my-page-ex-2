/* JavaScript Document */
//part of jquery library runs after doc is ready
$(document).ready(function() {

  //alert('Loaded Successfully');
  //jquery uses html tags to query html file
  $('nav a.mobile-menu').on('click', function() {
    //instructions when menu is clicked
    //function gets height of nav element and we store it in a variable
    var currentNavHeight = $('nav').height();

    if(currentNavHeight < 5)
    {
      //only stores nav that is about an ul
      var newNavHeight = $('nav > ul').height() + 15; //15 pixels
      //animate is built in jquery function
      //takes the height of the nav and changes it to the newNavHeight
      $('nav').animate({'height':newNavHeight + 'px'}, 750); //750 miliseconds
    }
    else
    {
      //goes back to 0 over 750 miliseconds
      $('nav').animate({'height':'0px'}, 750, function() {
        //removes set height if screen is changed to wider format
        $(this).removeAttr('style');
      });
    }
  });

  $(window).resize(function() {
    if($(this).width() > 625) {
      $('nav').removeAttr('style');
    }
  });

});
