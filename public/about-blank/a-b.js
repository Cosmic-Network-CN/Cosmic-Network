<script>
document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById("myIframe");
    var button = document.getElementById("a-b-cloak");

    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the current URL
        var currentUrl = window.location.href;

        // Open the new tab in the iframe
        iframe.style.display = 'block'; // Ensure the iframe is displayed
        iframe.contentWindow.open('about:blank', 'newIframe', 'width=400,height=400');
        iframe.contentWindow.location.href = currentUrl;

        // Switch the main tab to Google Classroom
        window.top.location.href = "https://classroom.google.com/";
    });
});
</script>
