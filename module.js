
var currentURL = ""; 

function displayCurrentURL() {
  var newURL = window.location.href;


  console.log("Got the Current URL" + newURL); //remove later


  if (newURL !== currentURL && newURL !== "https://www.inecta.com/inecta-2023") {
    var urlParts = newURL.split("/");


    console.log(typeof(urlParts).length+" "+"type"); // remove later
    console.log("Separated url based on /" + urlParts); //remove later


    var lastWord = urlParts[urlParts.length - 1];
    lastWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
    lastWord = lastWord.replace(/-/g, ' ').replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });

    console.log("Filtered the last word" + lastWord); 


    var h3Element = document.querySelector(".banner-column-two h3");
    if (h3Element) {
      h3Element.textContent = lastWord;
    }
  }

  currentURL = newURL;
}  
window.addEventListener("DOMContentLoaded", displayCurrentURL);
