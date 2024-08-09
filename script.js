function update(value){
       const display=document.getElementById("display")
       display.textContent+=value
}
function clear(){
       const display=document.getElementById("display")
       display.textContent='0'
}

function result(){
       const display=document.getElementById("display")
       try{
              display.textContent=eval(display.textContent)
       }
       catch{
              display.textContent='error'
       }
}