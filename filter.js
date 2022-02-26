const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

window.addEventListener('load',(evt)=>{
    getJsonData('daily');
});


daily.addEventListener('click',function() {
    weekly.style.color="#FAFAFA";
    monthly.style.color="#FAFAFA";
    this.style.color = "#5858b4";
    getJsonData('daily');
});

weekly.addEventListener('click',function() {
    this.style.color = "#5858b4";
    daily.style.color="#FAFAFA";
    monthly.style.color="#FAFAFA";
    getJsonData('weekly');
});

monthly.addEventListener('click',function() {
    this.style.color = "#5858b4";
    daily.style.color = "#FAFAFA";
    weekly.style.color = "#FAFAFA";
    getJsonData('monthly');
});

function getJsonData(timeFrame) {
    fetch('./data.json').then(response => {
        return response.json();
    }).then(data => {
        data.forEach((value, index) => {
            //store json data in variables
            const current = value.timeframes[timeFrame].current;
            const previous = value.timeframes[timeFrame].previous;
            const title = value.title;
            let textnode;

            
            //store the nodes in variables
            const titleElement = document.getElementById(`title-${index}`);
            const currentHoursElement = document.getElementById(`current-${index}`);
               
            //set text inside the title & current hours fields
            titleElement.innerText = title;
            currentHoursElement.innerText = current.toString() + " hrs";
   
            //establish a span to hold the previous timeframe data & append it to the currentHours <p>
            const spanNode = document.createElement("span");
            if(timeFrame == 'daily'){
                textnode = document.createTextNode("Yesterday - " + previous.toString() + "hrs");
            }
            else if(timeFrame == 'weekly') {
                textnode = document.createTextNode("Last Week - " + previous.toString() + "hrs");
            }

            else {
                textnode = document.createTextNode("Last Month - " + previous.toString() + "hrs");
            }
            
            spanNode.appendChild(textnode);
            currentHoursElement.appendChild(spanNode);
        })
        
    });
}