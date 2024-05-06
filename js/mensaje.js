document.write("<h1>Ejercicios</h1>")

let a=prompt("intro a")
let b=prompt("intro b")
let c=prompt("intro c")
di=b**2
mul=a*c
DIS=di-mul
if (DIS >0) {
    res = "la ecuacion tiene dos raices"
} else if(DIS==0){
    res = "la ecuacion tiene una raiz"
}else if(DIS<0){
    res = "la ecuacion no tiene raices reales"
}
document.write("<h1>"+res+"</h1>")
