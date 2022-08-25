const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['#e73c3c', '#777', '#3489db', '#e67e22', '#2ecc71', 'pink', '#9932CC', '#00FFFF', '#A52A2A', '#F4A460'];

for(let i = 0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square);
}
function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;

}
function getRandomColor() {
    const index =Math.floor(Math.random() * colors.length)
    return colors[index]
}