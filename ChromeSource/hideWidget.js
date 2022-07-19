; (function () {
    console.log('[Hide Latest Video Performance] Executing extension');

    hideFollowers();

    window.onload = hideFollowers();

    function hideFollowers() {
        console.log('[Hide Latest Video Performance] Can we find the element?');
        var stats = document.querySelectorAll('[test-id="channel-dashboard-snapshot-card"]');
        if (stats.length) {
            stats.forEach(function (userItem) {                
                console.log('[Hide Latest Video Performance] element found, hiding!');
                userItem.style.display = 'none';
            });
        }
        else {
            console.log('[Hide Latest Video Performance] element not found, doing nothing!');
        }

    }
})()