document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization of medium-zoom
    setTimeout(function() {
      if (typeof mediumZoom === 'function') {
        mediumZoom('md-block img',{
        margin: 50,
        background: (30, 30, 30)});
      } else {
        console.error('mediumZoom is not defined');
      }
    }, 1000); // Adjust the delay (in milliseconds) as needed
});