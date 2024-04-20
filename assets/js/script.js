//get elements
const btnConvert = document.querySelector("#btn-convert");
const binaryInput = document.querySelector("#binary-input");
const result = document.querySelector("#result");
const error = document.querySelector("#error");
 
//time from each error message
let timeErrorMessage;
 
function validateBinary(binaryNumber){
  const numbersPossible = [0, 1];
  return numbersPossible.some(number => number == binaryNumber);
}
 
function handleBinaryInput(e) {
  let inputValue = (e.target.value == "")? "0": e.target.value;
  const error = document.querySelector("#error");
  
  //get last caracter in inputValue
  const lastIndex = inputValue[inputValue.length -1];
  
  if (validateBinary(lastIndex)){
    //hide possible error message
    error.classList.add("hide");
    //set value
    result.innerText = parseInt(inputValue, 2);
    //set focus in binaryInput
    binaryInput.focus();
    return;
  }

  //clear timeout
  clearTimeout(timeErrorMessage);
  
  //in the error case
  // Remove characters
  inputValue = inputValue.slice(0, -1);
  e.target.value = inputValue;
  // Remove class 'hide' from error element
  error.classList.remove("hide");
  // Set new timeout for hiding the error message
  timeErrorMessage = setTimeout(() => {
    // Add class 'hide' to error element after 3000ms
    error.classList.add("hide");
  }, 3000);
}

binaryInput.addEventListener("input", handleBinaryInput);
