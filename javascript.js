console.log("calculatrice")

let nbr_one = document.getElementById("nbr_one")
let nbr_two = document.getElementById("nbr_two")
let sum = document.getElementById("sum")

function somme(){
let res = 0
res = Number(nbr_one.value) + Number(nbr_two.value) ;
sum.innerHTML = res;

}
function soustraction(){
let res = 0
res = Number(nbr_one.value) - Number(nbr_two.value) ;
sum.innerHTML = res;