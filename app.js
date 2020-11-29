const inputValue = document.querySelector('.value-input')
const enviar = document.querySelector('#enviar')
const limpar = document.querySelector('#limpar')
const resultContainer = document.querySelector('.result')

const enterKey = (e) => {
    if (e.keyCode == 13) {
        calculate()
    }
}

const checkInputValue = () => {
    let checkInput = Number(inputValue.value)
    if (isNaN(checkInput) || checkInput == '' || checkInput == 'undefined') {
        resultContainer.classList.add('active')
        return resultContainer.innerHTML = `<h1>Por favor, digite um número!</h1`
    } else {
        return checkInput
    }

}

const calculate = () => {
    let inputChecked = checkInputValue()
    if (isNaN(inputChecked)) {
        resultContainer.classList.add('active')
        return resultContainer.innerHTML = `<h1>Por favor, digite um número!</h1`
    } else {
        resultContainer.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            resultContainer.innerHTML += `<span>${inputChecked} x ${i} = ${inputChecked * i}</span>`
        }
    }
}

const clear = () => {
    inputValue.value = ''
    resultContainer.classList.remove('active')
    resultContainer.innerHTML = ''
}

inputValue.addEventListener('keyup', enterKey)

enviar.addEventListener('click', () => {
    if(inputValue.value != ''){
        checkInputValue()
        calculate()
    }else {
        resultContainer.classList.add('active')
        return resultContainer.innerHTML = `<h1>Por favor, digite um número!</h1`
    }

})

limpar.addEventListener('click', clear)

const removeString = ()=>{
    let x = Number(inputValue.value)
    if(isNaN(x)){
        inputValue.value = ''
        resultContainer.classList.remove('active')
        resultContainer.innerHTML = ''
    }
}

setInterval(removeString, 1000 * 3)

const removeText = ()=>{
    if(resultContainer.classList.contains('active')){
        resultContainer.classList.remove('active')
        resultContainer.innerHTML = ''
    }
}

setInterval(removeText, 1000 * 3)
