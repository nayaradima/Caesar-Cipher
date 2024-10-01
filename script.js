const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
     "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



const selector = document.getElementById("replacement")
const text = document.getElementById("to-encrypt")
const button = document.getElementById("button")
const answer = document.getElementById("answer")

for(let i = 0; i < alphabet.length; i++) {
    selector.innerHTML = selector.innerHTML + `<option value="${i}">${alphabet[i]}</option>`
}

button.addEventListener("click",()=> {
    let textToEncrypt = text.value
    let replacement = +selector.value

    let ciphered = cipher(textToEncrypt,replacement)
    answer.classList.remove("invisible")
    answer.innerHTML = ciphered
})

function cipher(text,replacement) {
    let textUpperCase = text.toUpperCase().split("")
    let textCiphered = []

// This iteration is going to replace the letter A for letter E, using the index 0 (a) and using the replacement index to move the letter
    for (let i = 0; i < textUpperCase.length; i++) {
        let indexOfTheLetter = alphabet.indexOf(textUpperCase[i])
        if(indexOfTheLetter >= 0){
          textCiphered.push(letterForIndex(indexOfTheLetter+replacement))  
        } else {
            textCiphered.push(textUpperCase[i])
        }
    }
    // Converting array into string
    return textCiphered.join("")
}

// This function returns the index from the end to the starts. After Z, it can be returned to letter A.
function letterForIndex(index) {
    let finalIndex 
    if(index >= 0) {
        finalIndex = index % alphabet.length
    } else {
        finalIndex = alphabet.length + index % alphabet.length
    }
    return alphabet[finalIndex]
}