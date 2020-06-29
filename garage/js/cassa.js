if(verificaUtente()){
    document.getElementsByClassName('loader')[0].classList.add('hidden');

    let clienti =JSON.parse(window.localStorage.getItem('clienti'))
    //let clientiAffitto =JSON.parse(window.localStorage.getItem('xClient'))
    var xclientDB = JSON.parse(window.localStorage.getItem('xClient'))
    function popolaClienti(){
        clienti.forEach((ele)=>{
           let o = document.createElement('option')
           o.innerText = ele.email;
           document.getElementById('selectCassa').appendChild(o)
        })
     }
     popolaClienti();

function scegliCliente(){
   
      document.getElementById('datiTR').classList.add('hidden')
       
    
    
    var tdemail = document.getElementById('tdEmail')
    var tdcar= document.getElementById('tdClienteMacchina')
    var tdtype =document.getElementById('tdClienteMacchinaType')
    var tdspesa= document.getElementById('Clientispesa')
    let sel = document.getElementById('selectCassa');
    
    let selOpt =sel.options[sel.selectedIndex].text

    xclientDB.forEach((ele)=>{
       

            if(ele.email === selOpt){
                 document.getElementById('datiTR').classList.toggle('hidden')
                console.log('trovato')
                //document.getElementById('nomeCl').innerText=ele.email
                tdemail.innerText =ele.email;
                tdcar.innerText = ele.car;
                tdtype.innerText = ele.type;
                tdspesa.innerText=ele.spesa;
                return;
            }else{console.log('not found')}
       

   }) 
  
} 

 
function restituisci(){
    var spesaClienti =JSON.parse(window.localStorage.getItem('xClient'))
    alert('hai restituito')
    var x = 0
   xclientDB.forEach((ele)=>{
    

        if(ele.email ==  document.getElementById('tdEmail').innerText ){
         spesaClienti.splice(x,1);
         window.localStorage.setItem('xClient',JSON.stringify(spesaClienti));
         spesaClienti = JSON.parse(window.localStorage.getItem('xClient')); 

         
         xclientDB = spesaClienti
        }
       
   
      x++; 
      console.log(spesaClienti)
      console.log(xclientDB)
   })
   
   document.getElementById('datiTR').classList.add('hidden')
}


}else{
    location.href = 'index.html'
}

/* if(ele.mail != selOpt){
    tdemail.innerText ='not found';
    tdcar.innerText = 'not found';
    tdtype.innerText = 'not found';
    tdspesa.innerText='not found';
} */