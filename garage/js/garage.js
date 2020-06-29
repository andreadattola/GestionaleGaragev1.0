if(verificaUtente()){
  document.getElementsByClassName('loader')[0].classList.add('hidden');
  var nomeEmodello = []
  var carDB= []
  async  function getBrands(){ //fetch sui brands
    let marche$= await fetch(BRANDURL).then((brands)=>brands.json());
    return marche$
    
   
    
    //un altra fetch sull'id delle marche per tirarci le auto
  }
 
  
  function toggleClass(id){
    
    let el = document.getElementById('ul'+id)
    el.classList.toggle('uldisplay')
    console.log(el)
  }
  var counter = 0;
  
  
  getBrands().then((brands)=>{ 
  let cards = '';
  
  brands.Results.forEach(brand => {
    if (counter < 47){
  if(window.localStorage.getItem('car')==null){
   let xcar = brand.MakeName; 
   alert('nooo')
   carDB.push(xcar)
  
   
  
  }else {
    carDB = JSON.parse(window.localStorage.getItem('car'));
  }
   counter++
    function getModel(){ 
      let model$ = fetch(modelliMacchina+brand.MakeId+'?format=json').then((model)=>model.json())
      return model$;
    }
    
    
    cards += `
    
    
    <div class="card-header" id="${brand.MakeId}" onclick="toggleClass(id)">
    <h2 class="mb-0">
    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#${brand.MakeId}" aria-expanded="true" aria-controls="${brand.MakeId}"id="${brand.MakeId}">
    ${brand.MakeName}
    </button>
    </h2>
    </div>
    <div id="${brand.MakeId}" class="collapse show" aria-labelledby="headingOne" data-parent="#${brand.MakeName}">
    <div class="card-body" >
    <ul class="uldisplay" id="ul${brand.MakeId}">
    
    
    </ul>
    </div>
    </div>
    
    `
    document.getElementById('container-brands').innerHTML = cards;
    getModel().then((models)=>{
      
      
     
      models.Results.forEach((mod)=>{
       
        let xnm = mod.Make_Name+' '+mod.Model_Name
       nomeEmodello.push(xnm)
          
        
         
        
        if(mod.Make_ID==brand.MakeId){ //se il modello id è uguale al brand make id vuoldire che è la solita macchina quindi sto ciclando modelli della solita macchina faccio un li e lo appendo 
          
          var modname= document.createElement('li');
          modname.innerText = mod.Model_Name  
          // let modname = `<ul><li>${mod.Model_Name}</li></ul>`
          
          
          
          
          
          
          document.getElementById('ul'+brand.MakeId).appendChild(modname)
          
        }
    
      })
      window.localStorage.setItem('nm',JSON.stringify(nomeEmodello))
      
      
     
    
    })
  
    
    }
 
  });

  
  window.localStorage.setItem('car',JSON.stringify(carDB));
 
  

 

  
}) 
  

}else{
  location.href = 'index.html'
}





