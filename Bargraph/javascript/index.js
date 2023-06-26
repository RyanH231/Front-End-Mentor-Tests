let bars = document.querySelectorAll(".bar");
let total = document.querySelector(".total");
let sum;




function Bar()
{
    let info = fetch("./data.json").then((res) => {
        return res.text();
    }).then((data) => {
        const info = JSON.parse(data);
        let date = new Date();
        let day = date.getDay();
        bars[day].style.background = "aqua";
        for(var i in info)
        {
            bars[i].style.height = `${info[i].amount * 5}px`;
        } 
    });
}


Bar();
