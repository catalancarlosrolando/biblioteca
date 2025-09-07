document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('genially-iframe');
    const loader = document.getElementById('genially-loader');
    
    // Hide loader after 3 seconds (fallback)
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);

    // Try to detect when iframe is actually loaded
    iframe.addEventListener('load', function() {
        loader.classList.add('hidden');
    });
});