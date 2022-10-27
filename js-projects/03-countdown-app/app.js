
window.onload = () => {
    let count = 0;
    let intervalId;

    let seconds = document.getElementById("seconds")
    document.getElementById("start").addEventListener("click", startHandler)
    document.getElementById("stop").addEventListener("click", stopHandler)
    document.getElementById("reset").addEventListener("click", resetHandler)
    document.getElementById("increase").addEventListener("click", increaseHandler)
    document.getElementById("decrease").addEventListener("click", decreaseHandler)

    function increaseHandler() {
        count = count + 1
        seconds.innerText = count < 10 ? "0" + count: count;
    }

    function decreaseHandler() {
        if(count > 0) {
            count = count - 1
            seconds.innerText = count < 10 ? "0" + count: count;
        }
    }

    function startHandler() {
        if(!intervalId){
            intervalId = setInterval(intervalHandler, 1000);
        }
    }

    function intervalHandler() {
        if(count > 0) {
            count = count - 1
            seconds.innerText = count < 10 ? "0" + count: count;
        } else {
            alert("The countdown has completed !")
            resetHandler()
        }
    }

    function stopHandler() {
        clearInterval(intervalId);
        intervalId = null;
    }

    function resetHandler() {
        clearInterval(intervalId);
        intervalId = null;
        count = 0;
        seconds.innerText = "00";
    }

}
