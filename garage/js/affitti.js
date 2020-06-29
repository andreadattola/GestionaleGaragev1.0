if (verificaUtente()){
document.getElementsByClassName('loader')[0].classList.add('hidden');
let clienti =JSON.parse(window.localStorage.getItem('clienti'))
console.log(carDB)
console.log(clienti)
var posizione = -1
if (JSON.parse(window.localStorage.getItem('xClient'))!= null){
   var spesaClienti =JSON.parse(window.localStorage.getItem('xClient'))
   alert('spesa cliente inizializzed')
}else {spesaClienti = [];}
function popolaClienti(){
   clienti.forEach((ele)=>{
      let o = document.createElement('option')
      o.innerText = ele.email;
      document.getElementById('clientSelect').appendChild(o)
   })
}
popolaClienti();
function search(){
   let selectCarModel= document.getElementById('carModel')
   selectCarModel.innerHTML='';
   let carName=document.getElementById('searchCar').value
   console.log(carName)
 carDB.forEach((car)=>{
    if (car == carName){
       alert('match')
       document.getElementById('tdName').innerText = car
      let nomevar=  JSON.parse(window.localStorage.getItem('nm'))
        nomevar.forEach((carN)=>{
           
            if (carN.includes(carName)){
               console.log(carN)
         let type= document.createElement('option')
         type.innerText=carN;
          document.getElementById('carModel').appendChild(type)}

         // document.getElementById('tdType').innerText = document.getElementById('carModel').value
       }) 
    }
 })
} 
function set(){
   let selectCarModel= document.getElementById('carModel')
   let typeCar1 = selectCarModel.options[selectCarModel.selectedIndex].text
   
   document.getElementById('tdType').innerText = typeCar1
}

function calcola(){
   posizione =-1
  let nameMacchina= document.getElementById('tdName').innerText
   let tipoMacchina= document.getElementById('tdType').innerText
   let cA = document.getElementById('clientSelect')
   let clienteAffittuario =cA.options[cA.selectedIndex].text
  let spesa= document.getElementById('spesa').value = document.getElementById('data').value *40
let xclient= new Cliente(clienteAffittuario,nameMacchina,tipoMacchina,spesa)
spesaClienti.forEach((ele)=>{
   if(ele.email == clienteAffittuario){
      alert('devi restituire')
      posizione = 0;
     
   } 
})
if(posizione == -1){
 spesaClienti.push(xclient)
  console.log(spesaClienti)
   window.localStorage.setItem('xClient',JSON.stringify(spesaClienti));
}
}
function scegliCliente(){
   let clientSelect=document.getElementById('clientSelect');
   let clientSelezionato = clientSelect.options[clientSelect.selectedIndex].text
   var AddebitoCliente = clientSelezionato
   console.log(AddebitoCliente)
   
  

}

}else {
   location.href = 'index.html'
}
