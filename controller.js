let container = null
const message = document.createElement('p')
let input1 = null
let input2 = null
let input3 = null

function equilatero(){
    if(input1 === input2 && input2 == input3 && input3 == input1){
        return true
    }
    return false
}
function iscoseles(){
    if(input1 == input2 || input2 == input3 || input3 == input1){
        return true
    }
    return false
}
function escaleno(){
    if(input1 != input2 && input2!= input3 && input3 != input1){
        return true
    }
    return false
}
function isATriangle(){
    if(((input1 + input2) > input3) && ((input2 + input3) > input1) && ((input3 + input1) > input2)){
        return true
    }
    return false
}

function isANumber(){
    if(isNaN(input1) || isNaN(input2) || isNaN(input3)){
        return false
    }
    return true
}
function emptyField(){
    container = document.querySelector('#container')
    if(input1 == ''){
        createMessage("O primeiro lado deve ser informado")
        return true
    }
    if(input2 == ''){
        createMessage("O segundo lado deve ser informado")
        return true
    }
    if(input3 == ''){
        createMessage("O terceiro lado deve ser informado")
        return true
    }
    return false
}
function createMessage(textMessage){
    message.setAttribute('id','message')
    message.innerText = textMessage
    container.appendChild(message)
}

function verify(){
    input1 = document.getElementsByName('input1')[0].value
    input2 = document.getElementsByName('input2')[0].value
    input3 = document.getElementsByName('input3')[0].value
    
    console.log(input1, input2, input3)
    if(emptyField() == false){
        input1 = parseFloat(input1)
        input2 = parseFloat(input2)
        input3 = parseFloat(input3)
        if(isANumber() == true){
            if(isATriangle() == true){
                if(equilatero() == true){
                    createMessage("Triangulo equilatero")
                }else if(iscoseles()  == true){
                    createMessage("Triangulo isosceles")
                }else if(escaleno()  == true){
                    createMessage("Triangulo escaleno")
                }
            }else{
                createMessage("Não é um triangulo")
            }
        }else{
            createMessage("Deve-se inserir somente números nos campos")
        }
    }
}

function clean(){
    document.getElementsByName('input1')[0].value =''
    document.getElementsByName('input2')[0].value = ''
    document.getElementsByName('input3')[0].value = ''
    console.log("limpo")
}