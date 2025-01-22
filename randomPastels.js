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
    const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
    nameElement.style.background = gradient;
    nameElement.style.webkitBackgroundClip = 'text';
    nameElement.style.webkitTextFillColor = 'transparent';
}
 document.getElementById('changeColorButton').addEventListener('click', applyGradient);
applyGradient();
