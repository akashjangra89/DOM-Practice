



const colors = ['AliceBlue', "AntiqueWhite", 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue']



const indexBtn = document.querySelector('.btn')

const colorName = document.querySelector('.color')

indexBtn.addEventListener('click', function () {
    const color = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[color]
    colorName.textContent = colors[color]

})
