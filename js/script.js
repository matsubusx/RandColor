colorItem = document.querySelector('.color-text');
colorBtn = document.querySelector('.button');

function getRandomColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};

colorBtn.addEventListener('click', () => {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorBtn.style.color = newColor;
    colorItem.textContent = newColor;
})

