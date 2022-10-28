
window.onload = () => {
    main()
}

function main() {
    let wordsNumberDispaly = document.getElementById("words-number-dispaly");
    let textareaBox = document.getElementById("textarea-box");
    let clearAll = document.getElementById("clear-all");

    textareaBox.addEventListener("input", textareaBoxHandler);
    clearAll.addEventListener("click", clearAllHandler);

    // Event Handler
    function textareaBoxHandler(event) {
        let inputWords = event.target.value;
        let plainWords = inputWords.replace(/\s+/g, " ").trim();
        let wordsArr = plainWords.split(" ")
        let wordsLength = wordsArr.length

        if (wordsArr[0] == "") {
            wordsLength = 0
        }
        wordsNumberDispaly.innerText = wordsLength
    }

    function clearAllHandler() {
        textareaBox.value = "";
        wordsNumberDispaly.innerText = 0
    }
}
