```javascript
// ==UserScript==
// @jngaih         Media Downloader
// @namespace    http://example.com
// @version      1.0
// @description  Download media from any webpage
// @match        *://*/*
// @grant        GM_download
// ==/UserScript==
```
```javascript
(function() {
    'use strict';

    // Function to download media
    function downloadMedia(url) {
        GM_download(url);
    }

    // Handle media links
    function handleMediaLinks() {
        // Get all media elements on the page
        var mediaElements = document.querySelectorAll('img, video, audio');

        // Add event listener to each media element
        mediaElements.forEach(function(element) {
            element.addEventListener('contextmenu', function(event) {
                event.preventDefault();
                downloadMedia(this.src || this.currentSrc);
            });
        });
    }

    // Run the script
    handleMediaLinks();
})();
```
