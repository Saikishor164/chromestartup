const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');

    searchIcon.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        const encodedQuery = encodeURIComponent(query);
        window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
      }
    });

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        searchIcon.click();
      }
    });

    

$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});