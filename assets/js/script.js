//teste > email: eve.holt@reqres.in 
//password:cityslicka

const init = () =>{
    const inputEmail = document.querySelector('input[id="email"]');
    const inputPassword = document.querySelector('input[id="senha"]');
    const inputSubmit=document.querySelector('input[id="entrar"]');

     if(inputSubmit) {
         inputSubmit.addEventListener('click', (event) =>{
             event.preventDefault();

            fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers:{
                    'content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,

                })
            }).then((response) => {
                return response.json();
            }).then((data) =>{
                console.log(data)
            })
         })
     }

}
window.onload= init;