var anagrafica =[];


class Utente{
    constructor(id,n,e){
        this.id = id;
        this.name = n;
        this.email= e;
    }
    verificaEmail(e){
        if(this.email ===email){
            return true
        }else{
            return false;
        }
        
    }
}






if(verificaUtente()){
    document.getElementsByClassName('loader')[0].classList.add('hidden');
    
    var form = document.forms['formCliente'];
    form.addEventListener('submit',nuovoCliente);
    
    if(window.localStorage.getItem('clienti')== null){
        //se non ci sono 
        getClienti().then((res)=>{
            window.localStorage.setItem('clienti',JSON.stringify(res));
            anagrafica = res;
            
            aggiornaTabellaClienti();
        });
        
    } else{
        anagrafica = JSON.parse(window.localStorage.getItem('clienti'));
        //se ci sono elementi
        aggiornaTabellaClienti();
    }
    
    
    
    //inizio fetch preleva clienti server
    function getClienti(){
        let clienti$ =  fetch(serverUrl+serverUser).then(response => response.json())
        return clienti$ //sto tornando la promise della lista utenti
        
    }
    
}else{
    location.href = 'index.html'
}
// aggiorna tabella clienti prende dati dallo storage
function aggiornaTabellaClienti(){
    //carico in memoria di clientiDB il local storage
    let clientiDB = JSON.parse(window.localStorage.getItem('clienti'));
    
    let rowTable = '';
    clientiDB.forEach(cliente =>{
        rowTable += `
        
        <tr> 
        <td>${cliente.name}</td>
        <td>${cliente.email}</td>
        <td><button class="btn btn-sm btn-danger w-100" onclick="eliminaCliente('${cliente.email}')"><i class="fa fa-ban" aria-hidden="true"></i></button></td>
        </tr>
        
        `
        ;
        
    });
    document.getElementById('tableClienti').innerHTML = rowTable
}
function eliminaCliente(email){
    let posCliente = -1;
    let r = confirm("vuoi eliminare il cliente con la mail "+email+"?")
    if(r){
        anagrafica.forEach((cliente,index)=>{
            if(cliente.email ===email){
                posCliente = index
            }
        });
        if(posCliente != -1){
            anagrafica.splice(posCliente,1); //eliminiamo dall'anagrafica il cliente
            window.localStorage.setItem('clienti',JSON.stringify(anagrafica));
            aggiornaTabellaClienti();
        }
    }
}

function verificaEmailDB(email){
    let clientiDB = JSON.parse(window.localStorage.getItem('clienti'))
    let match = false;
    clientiDB.forEach((cliente)=>{
        if(cliente.email ===email){
            match = true;
        }
    });
    return match;
}



function nuovoCliente(event){
    
    let name = form.nameC.value
    let cognome = form.cognomeC.value
    let email = form.emailC.value
    
    console.log(name)
    if(email=== '' || email=== undefined){
        gestisciErrori('emailC');
        event.preventDefault();
    }
    else if(name=== '' || name=== undefined){
        gestisciErrori('nomeC');
        event.preventDefault();
    }
    else if(cognome=== '' ||cognome=== undefined){
        gestisciErrori('cognomeC');
        event.preventDefault();
    }else{
        if(!verificaEmailDB(email)){
            //possiamo salvare nello storage
            let c = new Utente((anagrafica.length+1),name+''+cognome,email)
            anagrafica.push(c);
            window.localStorage.setItem('clienti',JSON.stringify(anagrafica));
            //aggiornaTabellaClienti() non serve perche il l'invio del form automaticamente refresha la pag
        }else{
            alert('utente gia presente in Storage')
            event.preventDefault()
        }
        
    }
}
//gestisce errori validazione form
function gestisciErrori(name){
    let iFormClient= document.getElementsByClassName('inputFormCliente')
    console.log(iFormClient)
    for( i = 0; i<iFormClient.length; i++){
        if(iFormClient[i].classList.contains('error')){
            iFormClient[i].classList.remove('error')
        }
    }
    document.getElementById(name).classList.add('error')
}
//
/* const serverUrl = 'http://localhost:3000/';
const serverUser= 'users';
const utentModal= JSON.parse(window.localStorage.getItem('UserModal')) */
/* const mailModal = UserModal['x.email'];
//const nameModal = UserModal['x.name']; 

class Persona{
    constructor(name,email,number){
        this.name = name;
        
        this.email = email;
        this.number =number;
    }
    getEmail(){
        return this.email;
    }
    getName(){
        return this.name;
    }
}
async function collectUsers(){
    let table= document.getElementById('tbod');
    let addtable = ''
    let usercollections$= await fetch(serverUrl+serverUser).then(response => response.json())
    
    usercollections$.forEach((ele)=>{
        let x = new Persona(ele.name,ele.email,ele.id)
        console.log(x.name,x.email,x.number)
        
        let tr = document.createElement('tr')
        addtable = `  
        <th scope="row">${x.number}</th>
        <td>${x.name}</td>
        
        <td>${x.email}</td>
        <td><button class="btn btn-sm btn-info w-100"><i class="fa fa-user-circle" aria-hidden="true"></i></button></td>
        <td><button class="btn btn-sm btn-danger w-100"><i class="fa fa-ban" aria-hidden="true"></i></button></td>
        `
        
        tr.innerHTML = addtable;
        table.appendChild(tr)
        
        
        
    })
}



collectUsers()

function addClient(){
    
    var y = 11
    let table= document.getElementById('tbod');
    let nomeModale = document.getElementById('nomeModale');
    let cognomeModale = document.getElementById('cognomeModale');
    let emailModale = document.getElementById('emailModale');
    let x = new Persona(nomeModale.value+cognomeModale.value,emailModale.value,y)
    //console.log(x.name,x.email,x.number)
    
    window.localStorage.setItem('UserModal',JSON.stringify(mailModal,nameModal))
    console.log(local)
    let tr = document.createElement('tr')
    addtable = `  
    <th scope="row">${x.number}</th>
    <td>${x.name}</td>
    
    <td>${x.email}</td>
    <td><button class="btn btn-sm btn-info w-100"><i class="fa fa-user-circle" aria-hidden="true"></i></button></td>
    <td><button class="btn btn-sm btn-danger w-100"><i class="fa fa-ban" aria-hidden="true"></i></button></td>
    `
    
    tr.innerHTML = addtable;
    table.appendChild(tr)
    
    y++
}


function caricaSessione(){
    let table= document.getElementById('tbod');
    let sess= JSON.parse(window.localStorage.getItem('UserModal',mailModal))
    if(sess != ''){
        
        
        
        sess.forEach((ele)=>{
            console.log(ele)
            // let x = new Persona()
            
            
            
        })
    }}
    caricaSessione() */
    