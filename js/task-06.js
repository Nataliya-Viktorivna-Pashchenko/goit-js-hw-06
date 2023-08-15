const inpText = document.querySelector("#validation-input");

const validatoinInput = (event) => {
    const inputText = event.currentTarget.value;
    
    if (inputText.trim().length === Number(inpText.dataset.length)) {
         inpText.classList.remove("invalid")
        inpText.classList.add("valid");

       
    } else {
        inpText.classList.remove("valid");
        inpText.classList.add("invalid");

    }
    
};
inpText.addEventListener("blur", validatoinInput);