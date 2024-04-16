 //get elements
 const btnConvert = document.querySelector("#btn-convert");
 const binaryInput = document.querySelector("#binary-input");
 const result = document.querySelector("#result");
 const error = document.querySelector("#error");
 
 function handleBinaryInput(e) {
  let inputValue = e.target.value;
  let timeError;
  const error = document.getElementById("error");
  
  if (inputValue[inputValue.length - 1] !== "0" && inputValue[inputValue.length - 1] !== "1") {
      // Remove characters
      inputValue = inputValue.slice(0, -1);
      e.target.value = inputValue;
      // Remove class 'hide' from error element
      error.classList.remove("hide");
      // Set new timeout for hiding the error message
      timeError = setTimeout(() => {
          // Add class 'hide' to error element after 3000ms
          error.classList.add("hide");
      }, 3000);
  }
  
  if (inputValue == ""){
     return;
  }
  
  //set value
   result.innerText = parseInt(inputValue, 2);
   //set focus in binaryInput
   binaryInput.focus();
 }
 
 binaryInput.addEventListener("input", handleBinaryInput);