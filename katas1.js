//Questão 1
function cubicSquare(){

    for(let cont = 1; cont <= 10; cont++){
        potencia = cont ** 3
        console.log(potencia)
    }
    
}

cubicSquare()

//Questão 02
function divisibleFor(numero, divisor){
    numeroDivisivel = 0
    for(let i = 1; i <= numero; i++){
        if(i % divisor == 0){
            console.log(i)
        }
    }
    
}


divisibleFor(100, 10)

//Questão 3
function stringElement(string, Number) {
    let newString = ""
    for(let i = 0; i <= string.length; i++){
        if(i < string.length-1){
            newString += string[Number]
            break
        }
    }
    console.log(newString.toUpperCase())
}

stringElement("algorítmos", 7)

//Questaõ 4
function stringSlicer(string, Number){
    let newString = ""
    for(let i = 0; i < Number; i++){
        newString += string[i]
    }
    console.log(newString)
   
} 
stringSlicer("ALGORÌTMOS", 4)

//Questão 5
function stringRest(string, Number){
    let stringNova = ""

    for (let i = Number; i < string.length; i++) {
        stringNova += string[i]
    }
     console.log(stringNova)

}


stringRest("ALGORÌTMOS", 2)

//Questão 6
function quantidadeDeVogais(string) {
    let count = 0

    for(let i = 0; i < string.length; i++) {
        let charMin = string[i].toLowerCase()
        if(charMin == "a" || charMin == "e" || charMin == "i" || charMin == "o" || charMin == "u"){
            count += 1
        }
        
    }
    return count
}

console.log(quantidadeDeVogais("abacaxi"))

//Questão 7
function countTextOccurrences(string, stringvogal){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() == stringvogal.toLowerCase()) {
            count += 1
        }
    }
    return count
}

console.log(countTextOccurrences("Abacaxi", "i"))

//Questão 8
function textBackwards(string){
    let stringReverse = ""
    for(let i = string.length-1; i >= 0; i--){
        stringReverse += string[i]
    }
    return stringReverse

}

console.log(textBackwards("abacaxi"))

//Questão 9
function removeBlank(string){
    let semEspaco = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] !== " "){
            semEspaco += string[i]
        }
    }
    return semEspaco
    
}

console.log(removeBlank("Não ficará   espaços em branco"))




//Questão 10
function encryptText(string) {
    let newString = ""

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i]

        if (currentChar == "A") {
            currentChar = "X"
        } 
        if (currentChar == "a") {
            currentChar = "x"
        }
        if (currentChar == "E"){
            currentChar = "Y"
        }
        if (currentChar == "e"){
            currentChar = "y"
        }
        if (currentChar == "I"){
            currentChar = "W"
        }
        if (currentChar == "i"){
            currentChar = "w"
        }
        if (currentChar == "O"){
            currentChar = "K"
        }
        if (currentChar == "o"){
            currentChar = "k"
        }
        if (currentChar == "U"){
            currentChar = "Z"
        }
        if (currentChar == "u"){
            currentChar = "z"
        }
        newString += currentChar
    }
    return newString
}

console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada"))

