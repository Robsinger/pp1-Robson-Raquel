const form = DocumentElementById('form')
const username = DocumentElementById('username')
const email = DocumentElementById('email')
const password = DocumentElementById('password')
const passwordtwo = DocumentElementById('passwordtwo')

form.addEventListner('submit',(e)); {
    e.preventDefault()

    checkInputs()

}

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const password= password.value.trim()
    const passwordtwo = username.value.trim()

    if(usernameValue ===''){
        errorValidation(username, 'preencha esse campo')
    }else{
        const usernameValue = username.value
        successValidation(username)
    }

    if(emailValidation ===''){
        errorValidation(email, 'preencha esse campo')
    }else{
        successValidation(email)
    }

    if(passwordValue ===''){
        errorValidation(password, 'preencha esse campo')

    }else if(passwordValue.length < 8){
        errorValidation(password, 'A senha deve ter mais de 8 caracteres')

    }else{
        successValidation(password)
    }

    if(passwordtwoValue ===''){
        errorValidation(passwordtwo, 'preencha o campo')

    }else if(passwordValue !== passwordtwo){
        errorValidation(passwordtwo, 'senha não é igual')
    }else{
        successValidation(passwordtwo)
    }

    function errorValidation(input, message)
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'

}

function successValidation(input){
    const formControl = input.parentElement;
}