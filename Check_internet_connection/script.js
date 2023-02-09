const popUp = document.querySelector('.popUp')
const icon = document.querySelector('.material-symbols-outlined')
const title = document.querySelector('.title')
const desc = document.querySelector('.desc')

let isOnline = true; 
let intervalId; 
let timer = 10;
const checkConnection = async ()=>{
    try{
        // Api to check network status https://jsonplaceholder.typicode.com/posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        isOnline = response.status >= 200 && response.status <300
    }
    catch(error){
        isOnline = false
    }
    timer =10
    clearInterval(intervalId)
    handlePopup(isOnline)
}

const handlePopup = (status) =>{
    if (status) {
        icon.classList.remove('red')
        title.classList.remove('red')
        icon.innerText = 'cell_tower'
        icon.classList.add('green')
        title.innerText = 'Connection Restored'
        title.classList.add('green')
        desc.innerText = 'You are now successfully connected to Internet.'
        return setTimeout(()=> popUp.classList.remove('show'), 700 )
        
    }
    icon.innerText = 'signal_disconnected'
    icon.classList.add('red')
        title.innerText = 'Connection Lost'
        title.classList.add('red')
        desc.innerHTML = 'You are disconnected. We will attempt to reconnect in <strong>10</strong> Seconds.</p>'
    popUp.classList.add('show')
    intervalId = setInterval(()=>{
        timer--;
        if (timer === 0) {
            checkConnection()
        }
        popUp.querySelector('.desc strong').innerHTML = timer
    },1000)
}
// Check the connection status every 3 seconds
setInterval(() => isOnline && checkConnection(),3000)