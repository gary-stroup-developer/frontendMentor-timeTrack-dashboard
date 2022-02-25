const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

window.addEventListener('load',(evt)=>{
    fetch('./data.json').then(response => {
        return response.json();
    }).then(data => {
        data.forEach((value, index)=>{
            const current = value.timeframes.daily.current;
            const previous = value.timeframes.daily.previous;
            const title = value.title;

            console.log({title, current, previous})
            document.getElementById(`title-${index}`).innerText = title;
            document.getElementById(`current-${index}`).innerText = current.toString() + " hrs";
            document.getElementById(`previous-${index}`).innerText = "Yesterday - " + previous.toString() + "hrs";
        })
    })
})