
window.onload = () => {
    main()
}

function main() {
    let resultDisplayOne = document.getElementById("result-one");
    let resultDisplayValue = document.getElementById("result-value");
    let resultDisplayTwo = document.getElementById("result-two");
    let inputValue = document.getElementById("input-words");

    document.getElementById("checker-btn").addEventListener("click", checkerBtnHandler);

    // Event Handler
    function checkerBtnHandler() {
        let wordsInput = inputValue.value.toLowerCase();
        if(wordsInput != "") {
            let plainWords = wordsInput.replace(/\s+/g, "").trim();
            let reverseWords = reverseString(plainWords)

            if(plainWords == reverseWords) {
                resultDisplayOne.innerText = `You have won the game ! `
                resultDisplayValue.innerText = `"${inputValue.value}"`
                resultDisplayTwo.innerText = ` is Palindrome.`
                inputValue.value = "";
            } else {
                resultDisplayOne.innerText = `You have loose the game ! `
                resultDisplayValue.innerText = `"${inputValue.value}"`
                resultDisplayTwo.innerText = ` is not Palindrome.`
                inputValue.value = "";
            }
        } else {
            alert("Input your words in input field.");
        }
    }
}

// Utilites
function reverseString(str) {
    let newStr = "";
    let strLength = str.length - 1;
    for (let i = 0; i <= strLength; i++) {
        newStr += str[strLength - i];
    }
    return newStr;
}
