const localStorageUser = JSON.parse(window.localStorage.getItem('loggedUser'))
let adminUsr = JSON.parse(window.localStorage.getItem('adminUser'))
const passwordDB = adminUsr['password'];
const emailDB = adminUsr['email'];
var carDB = JSON.parse(window.localStorage.getItem('car'));


//const clienti
const BRANDURL='https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
const modelliMacchina = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/"
const serverUrl = 'http://localhost:3000/';
const serverUser= 'users';
const utentModal= JSON.parse(window.localStorage.getItem('UserModal'))
//CLIENTE
class Cliente{
    constructor(email,car,type,spesa){
       this.email = email;
       this.car = car;
       this.type=type;
       this.spesa = spesa;

    }
 }




function verificaUtente(){
    if(localStorageUser != ''){

        if(passwordDB != localStorageUser){
            return false;
            
    }    else{
        return true;
    }
}else{
    return false
}}


function logOut(){
    localStorage.removeItem('loggedUser');
    location.href = 'index.html'

}