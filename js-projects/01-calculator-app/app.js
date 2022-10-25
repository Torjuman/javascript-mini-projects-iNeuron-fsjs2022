
window.onload = () => {
    main()
}

function main() {
    // DOM refs & variables
    const numShow = document.getElementById("num-show")
    const resultShow = document.getElementById("result-show")
    document.getElementById("one").addEventListener('click', numberHandler)
    document.getElementById("two").addEventListener('click', numberHandler)
    document.getElementById("three").addEventListener('click', numberHandler)
    document.getElementById("four").addEventListener('click', numberHandler)
    document.getElementById("five").addEventListener('click', numberHandler)
    document.getElementById("six").addEventListener('click', numberHandler)
    document.getElementById("seven").addEventListener('click', numberHandler)
    document.getElementById("eight").addEventListener('click', numberHandler)
    document.getElementById("nine").addEventListener('click', numberHandler)
    document.getElementById("zero").addEventListener('click', numberHandler)
    document.getElementById("plus").addEventListener("click", calculationSignHandler)
    document.getElementById("minus").addEventListener("click", calculationSignHandler)
    document.getElementById("multiply").addEventListener("click", calculationSignHandler)
    document.getElementById("divide").addEventListener("click", calculationSignHandler)
    document.getElementById("clear-all").addEventListener('click', clearAllHandler)
    document.getElementById("clear-one").addEventListener('click', clearOneHandler)
    const equal = document.getElementById("equal")

    let value = ''
    let firstResult = 0

    // Calculation on change event
    const config = { childList: true, subtree: true,};

    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                if(resultShow.innerText.length >= 1) {
                    if(numShow.innerText.charAt(0) == '+' && numShow.innerText.length > 1) {
                        resultShow.innerText = firstResult + parseInt(value.slice(1))

                    }
                    if(numShow.innerText.charAt(0) == '-' && numShow.innerText.length > 1) {
                        resultShow.innerText = firstResult - parseInt(value.slice(1))

                    }
                    if(numShow.innerText.charAt(0) == '*' && numShow.innerText.length > 1) {
                        resultShow.innerText = firstResult * parseInt(value.slice(1))

                    }
                    if(numShow.innerText.charAt(0) == '/' && numShow.innerText.length > 1) {
                        resultShow.innerText = firstResult / parseInt(value.slice(1))

                    }
                }
            }
        }
    };

    const observer = new MutationObserver(callback)

    observer.observe(numShow, config)

    // Event handler
    function clearAllHandler() {
        resultShow.innerText = null
        numShow.innerText = 0
        value = ''
        firstResult = 0
    }

    function clearOneHandler() {
        if(value.length <= 1) {
            numShow.innerText = 0
            value = ''
        } else {
            value = value.slice(0, -1)
            numShow.innerText = value
        }
    }

    function calculationSignHandler(event) {
        let signAlreadyExist = numShow.innerText.charAt(0) == '+' || numShow.innerText.charAt(0) == '-' || numShow.innerText.charAt(0) == '*' || numShow.innerText.charAt(0) == '/' ? true : false

        if(signAlreadyExist) {
            firstResult = parseInt(resultShow.innerText)
            value = event.target.value
            numShow.innerText = value
        } else {
            resultShow.innerText = value
            firstResult = parseInt(value)
            value = event.target.value
            numShow.innerText = value
        }
        
    }

    function numberHandler(event) {
        value += event.target.value
        numShow.innerText = value
    }

    equal.addEventListener('click', function(){
        if(resultShow.innerText.length >= 1) {
            firstResult = resultShow.innerText
            resultShow.innerText = firstResult
            numShow.innerText = 0
            value = ''
        } else {
            firstResult = value
            resultShow.innerText = firstResult
            numShow.innerText = '0'
            value = ''
        }
    })
}

