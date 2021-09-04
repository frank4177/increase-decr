const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const display = document.getElementById("display")
const reset = document.getElementById("rest")

gsap.from('.inner', {duration: 1, y: '-70%', ease: 'bounce'});

inc.addEventListener("click", up)

let i = 0




function up(){
i++;

display.innerHTML =i;

}

dec.addEventListener("click", down)



function down(){
  i--;
    
  display.innerHTML =i;
}



    reset.addEventListener("click", clear)



function clear(){
    i=0
    
 display.innerHTML = i

 gsap.from('.inner', {duration: 1, x: '-2%', ease: 'bounce'});

    }