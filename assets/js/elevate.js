let countDownDate = new Date("Aug 25, 2023 09:00:00")
countDownDate.getHours()
let x = setInterval(function () {
    let now = new Date()
    now.getHours()
    let distance = countDownDate - now

    let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
    days.length == 1 ? days = "0" + days : days

    let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    hours.length == 1 ? hours = "0" + hours : hours

    let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    minutes.length == 1 ? minutes = "0" + minutes : minutes

    let seconds = String(Math.floor((distance % (1000 * 60)) / 1000));
    seconds.length == 1 ? seconds = "0" + seconds : seconds

    let content = document.getElementById('countdown')
    content.innerHTML = `<p>Time Left:</p><h1><span>${days}</span>:<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span> </h1>`

    if(days <= "00" && hours <= "00" && minutes <="00" && seconds <= "00"){
        content.innerHTML = `<h1>Event has Begun</h1>`
    }
}, 1000)


const unCheck = () => {
    const checkBox = document.getElementById('active')
    checkBox.checked = false
}

const copyToClipboard = () => {
    navigator.clipboard.writeText("rocknrollschoolofmusic@gmail.com")
    alert("Copied the text: rocknrollschoolofmusic@gmail.com")
}
