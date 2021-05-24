jQuery(document).ready(function($) {
  if (typeof $.cookie('open_login') === 'undefined') { 
    var date = new Date();
    var period = 30;
    date.setTime(date.getTime() + period * 24 * 60 * 60 * 1000);
    $.cookie('open_login', 'yes', {
      expires: date,
      path: '/'
    });
    
    // выполняем нужные действия
  }
});