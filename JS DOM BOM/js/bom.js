function remove() {
    const result = confirm('устгах уу?');
    if (result) {
        alert('Ustgalaa')
    }
}

function openWindow() {
    window.open('/Users/evening/Documents/JS DOM BOM/bom.html', 'BOM', 'height=500px, width=500px')
}

function openWindowAfter() {
    setTimeout(openWindow, 2 * 1000 );
}