class Utente{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
    return this.password;
}
}
let adminUser = new Utente('mail@mail.it',sha512('ciao'))
window.localStorage.setItem('adminUser',JSON.stringify(adminUser));