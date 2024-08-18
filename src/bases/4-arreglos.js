const arreglo = [1,2,3,4]
const arreglo2 = [...arreglo,5,6]
const arreglo3 = arreglo2.map((num)=>{
    return num * 2
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);