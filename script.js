let display = document.querySelector('.display');

let AC= document.querySelector('#AC');
let DE= document.querySelector('#DE');
let calculate=document.querySelector("#equal")

AC.addEventListener('click', function(){
    display.innerText = '';
})

DE.addEventListener('click', function(){
    let string=display.innerText;
    if(string.length>0){
        display.innerText=string.substring(0,string.length-1);
    }
})

calculate.addEventListener('click', function(){
    display.innerText+=' = '+eval(display.innerText);
})
