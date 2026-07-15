let hourSpan=document.getElementById('hours')
let minuteSpan=document.getElementById('minutes')
let secondSpan=document.getElementById('seconds')
let ampmSpan=document.getElementById('ampm')


function updateClock(){
        let date= new Date()
        let hour=date.getHours()
        hourSpan.textContent=hour
        let minutes=date.getMinutes()
        minuteSpan.textContent=minutes
        let second=date.getSeconds()
        secondSpan.textContent=second
}
setInterval(updateClock,1000)