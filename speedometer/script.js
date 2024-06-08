const outerCircle = document.getElementById('outerCircle')
const hand = document.getElementById('hand')
const value = document.getElementById('value')

setInterval(() => {
    var randomNumber = Math.floor(Math.random() * 100) + 1
    // var randomNumber = 15
    value.innerHTML = `${randomNumber}%`
    hand.style.transform = `rotate(${Math.floor((180 * randomNumber) / 100)}deg)`
    outerCircle.style.background = `conic-gradient(red ${Math.floor(randomNumber / 2)}%, rgb(156, 156, 156) 3%, rgb(156, 156, 156) ${100 - 3 - Math.floor(randomNumber / 2)}%)`;
}, 2000)

