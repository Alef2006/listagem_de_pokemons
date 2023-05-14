


const body=document.querySelector("body");
const botaoAlterarTema=document.getElementById("botao-alterar-tema");
const imagembotaoAlterarTema=document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click",()=>{

    const estaNoTemaEscuro=body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");


 if(estaNoTemaEscuro){
   imagembotaoAlterarTema.setAttribute("src","./src/images/sun.png");
  
 }else{
   imagembotaoAlterarTema.setAttribute("src","./src/images/moon.png");
 }

});
