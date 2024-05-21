// Get the iframe and the button
var iframe = document.getElementById("myIframe");
var button = document.getElementById("a:b-cloak");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Open the new tab in the iframe
  iframe.contentWindow.open(currentUrl, "about:blank", "width=400,height=400");
  iframe.contentWindow.location.href = currentUrl;

  // Switch the main tab to Google
  window.top.location.href = "https://google.com/";
});
