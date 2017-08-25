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

//ajax

 $('.accordion-sn').on('click', function(event) {

   $.ajax({
     type: 'GET',
     url : "https://beermapping.com/webservice/locquery/5286bcef453a6951aca9375274f9029d/sierra+nevada&s=json/",
     success: function(response) {
       displayData(response[0]);
       }
     })

function displayData(data) {
  var name = '<li>' + data.name + '</li>';
  var street = '<li>' + data.street + '</li>';
  var location = '<li>' + data.city + ', ' + data.state + ' ' + data.zip;
  var phone = '<li>' + data.phone + '</li>';
  var url = '<li>' + data.url + '</li>';

  $('.sierra-nevada').append(name);
  $('.sierra-nevada').append(street);
  $('.sierra-nevada').append(location)
  $('.sierra-nevada').append(phone)
  $('.sierra-nevada').append(url)
}
});


//AB data

$('.accordion-ab').on('click', function(event) {

 $.ajax({
   type: 'GET',
   url : "https://beermapping.com/webservice/locquery/5286bcef453a6951aca9375274f9029d/anheuser_busch&s=json/",
   success: function(response) {
     displayData(response[0]);
     }
   })

function displayData(data) {
  var name = '<li>' + data.name + '</li>';
  var street = '<li>' + data.street + '</li>';
  var location = '<li>' + data.city + ', ' + data.state + ' ' + data.zip;
  var phone = '<li>' + data.phone + '</li>';

  $('.busch').append(name);
  $('.busch').append(street);
  $('.busch').append(location)
  $('.busch').append(phone)
}
});

//Highland data

 $(".accordion-hl").click(function() {

   $.ajax({
     type: 'GET',
     url : "https://beermapping.com/webservice/locquery/5286bcef453a6951aca9375274f9029d/highland&s=json/",
     success: function(response) {
       displayData(response[4]);
       }
     })

function displayData(data) {
  var name = '<li>' + data.name + '</li>';
  var street = '<li>' + data.street + '</li>';
  var location = '<li>' + data.city + ', ' + data.state + ' ' + data.zip;
  var phone = '<li>' + data.phone + '</li>';
  var url = '<li>' + data.url + '</li>';

  $('.highland').append(name);
  $('.highland').append(street);
  $('.highland').append(location)
  $('.highland').append(phone)
  $('.highland').append(url)
}
});

//Coors data

 $(".accordion-c").click(function() {

   $.ajax({
     type: 'GET',
     url : "https://beermapping.com/webservice/locquery/5286bcef453a6951aca9375274f9029d/coors&s=json/",
     success: function(response) {
       displayData(response[0]);
       }
     })

function displayData(data) {
  var name = '<li>' + data.name + '</li>';
  var street = '<li>' + data.street + '</li>';
  var location = '<li>' + data.city + ', ' + data.state + ' ' + data.zip;
  var phone = '<li>' + data.phone + '</li>';
  var url = '<li>' + data.url + '</li>';

  $('.coors').append(name);
  $('.coors').append(street);
  $('.coors').append(location)
  $('.coors').append(phone)
  $('.coors').append(url)
}
});

//Miller data

 $(".accordion-m").click(function() {

   $.ajax({
     type: 'GET',
     url : "https://beermapping.com/webservice/locquery/5286bcef453a6951aca9375274f9029d/miller&s=json/",
     success: function(response) {
       displayData(response[0]);
      console.log(response[0]);
       }
     })

function displayData(data) {
  var name = '<li>' + data.name + '</li>';
  var street = '<li>' + data.street + '</li>';
  var location = '<li>' + data.city + ', ' + data.state + ' ' + data.zip;
  var phone = '<li>' + data.phone + '</li>';
  var url = '<li>' + data.url + '</li>';

  $('.miller').append(name);
  $('.miller').append(street);
  $('.miller').append(location)
  $('.miller').append(phone)
  $('.miller').append(url)
  }
});
