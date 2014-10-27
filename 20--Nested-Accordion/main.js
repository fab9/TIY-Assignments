var accLinks;
var accPanels;

window.onload=function() {

    // when the page loads, grab the main-heading h1 elements
    accLinks = document.getElementsByTagName("h1");
    // Now get all the nested container li's
    accPanels = document.getElementsByClassName("main-content");

    // activate the _first_ one
    // displayPanel(accLinks[0]);

    // attach event listener to h1 using onclick, fire the displayPanel function, return false to disable the "link"
    for (var i = 0; i < accLinks.length; i++) {
        accLinks[i].onclick = function() {
      displayPanel(this);
      return false;
    }
  }
}

function displayPanel(accToActivate) {
    // go through all the <h1> elements
    for (var i = 0; i < accLinks.length; i++) {
      console.log('entered displayPanel for loop');
      console.log('the accToActivate is: ' + accToActivate);
        if (accLinks[i] == accToActivate) {
      // if it's the one to activate, change its class
            accLinks[i].classList.add("active");
        } else {
      // remove the active class on the link
          // accLinks[i].classList.remove("active");
      // hide the panel
          accPanels[i].classList.add = "is-hidden";
        }
  }
}