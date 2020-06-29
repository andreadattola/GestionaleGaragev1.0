if(verificaUtente()){


location.href ='clienti.html'



}else{

    //let adminUsr = JSON.parse(window.localStorage.getItem('adminUser'))
    console.log(adminUser)
    //const emailDB = adminUsr['email']
    //const passwordDB = adminUsr['password']
    function formSubmit(event){
    
        if(form.email.value == '' || form.email.value == undefined){
            alert('email non valida')
            event.preventDefault();
        }else if(form.password.value == '' || form.password.value==undefined){
            alert('pass non valida')
            event.preventDefault();
        }else{
            //verificare se la mail e la pass inserite siano presenti nel localstorage
            if(form.email.value === emailDB && sha512(form.password.value)===passwordDB){
                //andiamo in dash
                window.localStorage.setItem('loggedUser',JSON.stringify(sha512(form.password.value)));
            }else{
                alert('credenziali errate')
                form.reset();
                event.preventDefault();
            }
        }
        
    }
    
    
    
        const form = document.forms['loginForm']
        
        form.addEventListener('submit',formSubmit);


}








