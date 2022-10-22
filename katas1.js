// Questão 1
// function cubicSquare(){

//     for(let cont = 1; cont <= 10; cont++){
//         potencia = cont ** 3
//         console.log(potencia)
//     }
// }

// cubicSquare()

//Questão 02
// function divisibleFor(numero, divisor){
//     numeroDivisivel = 0
//     for(let i = 1; i <= numero; i++){
//         if(i % divisor == 0){
//             console.log(i)
//         }
//     }
    
// }


// divisibleFor(100, 10)

//Questão 3
// function stringElement (string, Number){
//     for(let i = 0; i <= Number; i++){
//         if(Number > 0){
//             novaString = ""
//             novaString += string[Number]
//         }
//     }
//     console.log(novaString.toUpperCase())
// }

// stringElement("algorítmos", 7)

// Questaõ 4
// function stringSlicer(string, Number){
//     let novaString = " "
//     for(let i = 0; i < Number; i++){
//         novaString += string[i]
//     }
//     console.log(novaString)
   
// } 
// stringSlicer("ALGORÌTMOS", 4)

//Questão 5
function stringRest(string, Number){
    let stringNova = ""
    for(let i = string.length-1; Number <= i; i--){
        stringNova += string[string.length+1-i]
        
    }
     console.log(stringNova)

}

stringRest("ALGORÌTMOS", 2)









// function removeEspaço(string){

//     for(let i = 0; i >= 0; i++){
//         let palavra = " "
//         if(string[i] !== " "){
//           palavra += string[i]
//         }
//     }
    
// }

// removeEspaço("Marcelo Cunha")
