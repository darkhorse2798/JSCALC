const clocks=document.getElementById('clock');

// console.log(date.toLocaleString());
setInterval(() => {
    let date = new Date();
    clocks.innerHTML=date.toLocaleTimeString();
}, 1000);

// This is 2nd emp branch 


