function getRandomPastelColor() {
    const r = Math.floor(Math.random() * 128 + 127); // 127 to 255 for pastel colors
    const g = Math.floor(Math.random() * 128 + 127);
    const b = Math.floor(Math.random() * 128 + 127);
    return `rgb(${r}, ${g}, ${b})`;
}
 
function applyGradient() {
    const nameElement = document.querySelector('.HelloWorld');
    const colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(getRandomPastelColor());
    }
    // i < 5 sets the amount of colors to be used
    // the following code is to apply the gradient around the text
    const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
    nameElement.style.background = gradient;
    nameElement.style.webkitBackgroundClip = 'text';
    nameElement.style.webkitTextFillColor = 'transparent';
}
// this assigns a click event to the button changeColorButton thus allowing us to have different pastels
 document.getElementById('changeColorButton').addEventListener('click', applyGradient);
applyGradient();
