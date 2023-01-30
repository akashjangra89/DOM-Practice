let count = 0
const BUTTON = document.querySelectorAll('button')
const numHeading = document.querySelector('h2')

BUTTON.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const STYLE = e.currentTarget.classList
        if (STYLE.contains('bg-green-600')) {
            count++
        }
        else if(STYLE.contains('bg-red-600')){
            count--  
        }
        else{
            count = 0
        }
        numHeading.classList.remove('text-red-600', 'text-green-600', 'text-black');
        if (count > 0) {
            numHeading.classList.add('text-green-600')
            
        }
       else if(count < 0) {
            numHeading.classList.add('text-red-600')

        }
       else{
            numHeading.classList.add('text-black')
        }
        numHeading.textContent = count
    })
})
// const resetButton = document.querySelector('.bg-black')
// const greenButton = document.querySelector('.bg-green-600')
// function changeColor(count){
//     if(count>0){
//         numHeading.classList.add('text-green-600')
//     }
//     else if(count<0){
//         numHeading.classList.add('text-red-600')
//     }
//     else{
//         numHeading.classList.add('text-black')
//     }
//     console.log(count)
// }

// greenButton.addEventListener('click', function(){
//     count +=1
//     changeColor(count)
//     numHeading.textContent = count
    

// })

// resetButton.addEventListener('click', function(){
//     count = 0
//     changeColor(count)
//     numHeading.textContent = count
    
// })

// redButton.addEventListener('click', function(){
//     count -= 1
//     changeColor(count)
//     numHeading.textContent = count

    
// })