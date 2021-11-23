//setInterval(timer, 1000);

// function mytimer(){
//     document.getElementById('counter').innerText = seconds++;
// }1000


function addingEventListener() {
    const input = document.getElementById('counter');

    function iWasOpened() {
        alert('I\'m ready to start counting')
    }
    window.addEventListener('load', iWasOpened);
}