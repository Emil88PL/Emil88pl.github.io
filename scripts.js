function loadIndex() {
  window.open("https://emil88pl.github.io");
}
// Load About me ###################

function loadAbout() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "about.html", true);
  xhttp.send();
}

// Load Thumb ##########################

function loadThumb() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "thumb.html", true);
  xhttp.send();
}

// Load Contact #######################

function loadContact() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "contact.html", true);
  xhttp.send();
}

 

// Remove class ################################

function checkWidth() {
if ($(window).width() > 768) {
    $('#changeClass').addClass('fixedElement');
  } else {
    $('#changeClass').removeClass('fixedElement');
 }
}

$(window).resize(checkWidth);

 function goingUP() {
$("html, body").animate({ scrollTop: 0 }, 500);
}
