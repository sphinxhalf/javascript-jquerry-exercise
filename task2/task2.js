$(document).ready(function() {
    $('#colorButton').click(function() {
      var randomColor = getRandomColor();
  
      $('.circle').css({
        'background-color': randomColor,
      });
    });
    $('#sizeButton').click(function() {
        var randomSize = getRandomSize();
        $('.circle').css({
            'width': randomSize,
            'height': randomSize,
        })
    });
  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function getRandomSize() {
        var minSize = 50;
        var maxSize = 200;
        return minSize + Math.floor(Math.random() * (maxSize - minSize)) + 'px';
      }
  
  });
  