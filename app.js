$(document).ready(function() {
  $('.accordion-sn').hide();
  $('.accordion-ab').hide();
  $('.accordion-hl').hide();
  $('.accordion-c').hide();
  $('.accordion-m').hide();
});

$('.got-it').click(function() {
  $('.intro').hide();
  $('.accordion-sn').show();
  $('.accordion-ab').show();
  $('.accordion-hl').show();
  $('.accordion-c').show();
  $('.accordion-m').show();
})

//sierra nevada accordion functionality

var acc = document.getElementsByClassName("accordion-sn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//AB accordion functionality


var acc = document.getElementsByClassName("accordion-ab");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//highland accordion functionality

var acc = document.getElementsByClassName("accordion-hl");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//coors accordion functionality

var acc = document.getElementsByClassName("accordion-c");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//miller accordion functionality

var acc = document.getElementsByClassName("accordion-m");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//toggle backgrounds based on beer

$('.accordion-sn').click(function() {
     $('body').toggleClass('bg sn-bg');
     $('.accordion-ab').toggle();
     $('.accordion-hl').toggle();
     $('.accordion-c').toggle();
     $('.accordion-m').toggle();
});

$('.accordion-ab').click(function() {
     $('body').toggleClass('bg ab-bg');
     $('.accordion-sn').toggle();
     $('.accordion-hl').toggle();
     $('.accordion-c').toggle();
     $('.accordion-m').toggle();
});

$('.accordion-hl').click(function() {
     $('body').toggleClass('bg hl-bg');
     $('.accordion-sn').toggle();
     $('.accordion-ab').toggle();
     $('.accordion-c').toggle();
     $('.accordion-m').toggle();

});

$('.accordion-c').click(function() {
     $('body').toggleClass('bg c-bg');
     $('.accordion-sn').toggle();
     $('.accordion-ab').toggle();
     $('.accordion-hl').toggle();
     $('.accordion-m').toggle();
});

$('.accordion-m').click(function() {
     $('body').toggleClass('bg m-bg');
     $('.accordion-sn').toggle();
     $('.accordion-ab').toggle();
     $('.accordion-hl').toggle();
     $('.accordion-c').toggle();
});

//Sierra data from BreweryDB API

$(".accordion-sn").click(function() {

 $.getJSON(`https://api.brewerydb.com/v2/search?q=sierra_nevada&type=beer&key=09bfd52cedee078843cbf5e41584a046`, function( response ) {
    displayData(response.data);
  });

function displayData(data) {
    for(var i=0; i<data.length; i++) {
      var html = '<li>' + data[i].name + '</li>';
      $('.sierra-nevada').append(html);
    }
  }
});


//AB data from BreweryDB API

 $(".accordion-ab").click(function() {

 $.getJSON(`https://api.brewerydb.com/v2/search?q=anheuser-busch&type=beer&key=09bfd52cedee078843cbf5e41584a046`, function( response ) {
    displayData(response.data);
  });

function displayData(data) {
    for(var i=0; i<data.length; i++) {
      var html = '<li>' + data[i].name + '</li>';
      $('.busch').append(html);
    }
  }
});

//Highland data from BreweryDB API

 $(".accordion-hl").click(function() {

 $.getJSON(`https://api.brewerydb.com/v2/search?q=highland&type=beer&key=09bfd52cedee078843cbf5e41584a046`, function( response ) {
    displayData(response.data);
  });

function displayData(data) {
    for(var i=0; i<data.length; i++) {
      var html = '<li>' + data[i].name + '</li>';
      $('.highland').append(html);
    }
  }
});

//Coors data from BreweryDB API

 $(".accordion-c").click(function() {

 $.getJSON(`https://api.brewerydb.com/v2/search?q=coors&type=beer&key=09bfd52cedee078843cbf5e41584a046`, function( response ) {
    displayData(response.data);
  });

function displayData(data) {
    for(var i=0; i<data.length; i++) {
      var html = '<li>' + data[i].name + '</li>';
      $('.coors').append(html);
    }
  }
});


//Miller data from BreweryDB API

 $(".accordion-m").click(function() {

 $.getJSON(`https://api.brewerydb.com/v2/search?q=miller&type=beer&key=09bfd52cedee078843cbf5e41584a046`, function( response ) {
    displayData(response.data);
  });

function displayData(data) {
    for(var i=0; i<data.length; i++) {
      var html = '<li>' + data[i].name + '</li>';
      $('.miller').append(html);
    }
  }
});
