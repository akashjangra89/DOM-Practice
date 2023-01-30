const hexBtn = document.getElementById('btn')
const hexColor = document.querySelector('.hex-color')
hexBtn.addEventListener('click', function(){
    const hexCode = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + hexCode
    hexColor.textContent = '#' + hexCode
})