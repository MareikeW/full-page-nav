function myFunction() {
  var x = document.getElementById("navigation").style;
  if (x.display == "none" || x.display == "") {
    x.display = "block";
  } else {
    x.display = "none";
  }
}
