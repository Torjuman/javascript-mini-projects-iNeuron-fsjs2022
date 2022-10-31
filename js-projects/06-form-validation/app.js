
window.onload = () => {
    main()
}

function main() {
    let username = document.getElementById("user-name");
    let userEmail = document.getElementById("user-email");
    let userPassword = document.getElementById("user-password");
    let userConfirmPassword = document.getElementById("user-confirm-password");
    let submitBtn = document.getElementById("submit-btn");

    let pass;

    submitBtn.addEventListener("click", submitHandler);

    userPassword.addEventListener("input", userPasswordHandler);

    // Event Handler
    function userPasswordHandler(event) {
        let passValue = event.target.value;
        passValue = passValue.replace(/\s+/g, "").trim()
        pass = passValue
        let charCheck = /[A-Za-z]/g.test(passValue);
        let numCheck = /[0-9]/g.test(passValue);
        let specialCharCheck = /[!@#$%&*?]/g.test(passValue);
        
        let one = document.getElementById("user-password-char-error");
        let two = document.getElementById("user-password-num-error");
        let three = document.getElementById("user-password-special-error");
        addRemoveClass(one, charCheck);
        addRemoveClass(two, numCheck);
        addRemoveClass(three, specialCharCheck);
        if(charCheck && numCheck && specialCharCheck && passValue.length > 5) {
            submitBtn.disabled = false
        } else {
            submitBtn.disabled = true
        }
    }

    function submitHandler(event) {
        event.preventDefault()
        // User name error handleing
        let plainUsername = username.value.replace(/\s+/g, "").trim().toLowerCase()
        if(plainUsername == "") {
            document.getElementById("user-name-error").innerText = "User name can't be empty";
        } else {
            username.value = "";
            document.getElementById("user-name-error").innerText = "";
        }

        // User email error handleing
        let plainUserEmail = userEmail.value.replace(/\s+/g, "").trim().toLowerCase();
        let endCheck = plainUserEmail.endsWith(".com") || plainUserEmail.endsWith(".net") || plainUserEmail.endsWith(".ai")
        if(plainUserEmail == "") {
            document.getElementById("user-email-error").innerText = "Email can't be empty";
        } else if(!plainUserEmail.includes("@") || !endCheck) {
            document.getElementById("user-email-error").innerText = "example@email.com";
        } else {
            userEmail.value = "";
            document.getElementById("user-email-error").innerText = "";
        }

        // User confirm password error handleing
        let plainConfirmPassword = userConfirmPassword.value.replace(/\s+/g, "").trim()
        if(plainConfirmPassword == "") {
            document.getElementById("user-confirm-password-error").innerText = "Password can't be empty";
        } else if(plainConfirmPassword != pass) {
            document.getElementById("user-confirm-password-error").innerText = "Password does not match";
        } else {
            userPassword.value = "";
            userConfirmPassword.value = "";
            document.getElementById("user-confirm-password-error").innerText = "";
        }
    }

    // Uitil
    function addRemoveClass(divChild, logic) {
        if(logic) {
            divChild.childNodes[0].classList.remove("hidden")
            divChild.childNodes[0].classList.add("inline-flex")
            divChild.childNodes[1].classList.remove("inline-flex")
            divChild.childNodes[1].classList.add("hidden")
        } else {
            divChild.childNodes[0].classList.remove("inline-flex")
            divChild.childNodes[0].classList.add("hidden")
            divChild.childNodes[1].classList.remove("hidden")
            divChild.childNodes[1].classList.add("inline-flex")
        }
    }
}
