changeType.ready(function() {
  $('.unmask').on('click', function(){
    if($(this).prev('input').attr('type') == 'password')
      changeType($(this).prev('input'), 'text');
    else
      changeType($(this).prev('input'), 'password');
    return false;
  });

  function changeType(x, type) {
    if(x.type == type)
      return x; //That was easy.
    try {
      return x.type = type; //Stupid IE security will not allow this
    } catch(e) {
      var html = $("<div>").append(x.clone()).html();
      var regex = /type=(\")?([^\"\s]+)(\")?/;
      var tmp = $(html.match(regex) == null ?
          html.replace(">", ' type="' + type + '">') :
          html.replace(regex, 'type="' + type + '"') );
      tmp.data('type', x.data('type') );
      var events = x.data('events');
      var cb = function(events) {
        return function() {
          for(var i in events) {
            var y = events[i];
            for(var j in y)
              tmp.bind(i, y[j].handler);
          }
        }
      }(events);
      x.replaceWith(tmp);
      setTimeout(cb, 10);
      return tmp;
    }
  }
});
