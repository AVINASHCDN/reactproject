let btn = document.querySelectorAll("button")
let screen = document.querySelector(".screen");

for(let a=0 ; a<btn.length; a++) {
    btn[a].addEventListener("click", (e)=>{
        switch (e.target.value){
            case "c":
                screen.innerText = ""
                break;
            case "a":
                if(screen.innerText) {
                    screen.innerText = screen.innerText.slice(0,-1)
                }
                break;
            case "=":
                screen.innerText = eval(screen.innerText)
                break;
            default:
                screen.innerText += e.target.value;
        }
    })
}

