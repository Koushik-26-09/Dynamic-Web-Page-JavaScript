let bgContainer = document.getElementById('bgContainer');
let heading = document.getElementById('heading');
let themeUserInput = document.getElementById('themeUserInput');

themeUserInput.addEventListener('keydown', function(event) {
    let text = themeUserInput.value.trim();
    
    if (event.key === 'Enter') {
        if (text.toLowerCase() === 'light') {
            bgContainer.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';
            heading.style.color = "#014d40";
        } 
        else if (text.toLowerCase() === 'dark') {
            bgContainer.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
            heading.style.color = "#ffffff";
        } 
        else {
            alert('Enter a valid theme');
        }
    }
});
