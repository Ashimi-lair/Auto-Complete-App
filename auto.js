const input=document.querySelector('#input');

const show=document.querySelector('#matchlist');

const searchJson=async (bringApi)=>{
    const res=await fetch('auto.json');

    const gottenJson=await res.json();
    
    let matchInput=gottenJson.filter((match)=>{
        const regex=new RegExp(`^${bringApi}`,'gi');

        return match.name.match(regex) || match.abbreviation.match(regex);
    });
  if(bringApi.length===0){
      matchInput=[];
      show.innerHTML='';
  }
  outputHtml(matchInput);
}

const outputHtml=matchInput =>{
    if(matchInput.length>0){
        const html=matchInput.map((join)=>`<div class="card card-body bg-secondary mb-1>
        <h4>${join.name} (${join.abbreviation})</h4></div>`).join('');
        show.innerHTML=html;
       
    }
   
};

input.addEventListener('keyup',()=> searchJson(input.value));