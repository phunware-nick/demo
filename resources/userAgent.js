(function() {

  var ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';

  navigator.__defineGetter__('userAgent', function() {
    return ua;
  });

  // Loaded before element.
  if (!navigator.userAgent.match(/iPhone/i)) {
    var alert = document.getElementById('alert');
    console.log(alert);
    alert.setAttribute('style', 'display:block;');
  }


})();
