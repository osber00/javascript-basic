import { getHeroeById } from "./bases/8-import-export";

/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Desde promesa')
        const heroe = getHeroeById(2)
        resolve(heroe)
        reject('No se pudo encontrar el heroe')
    }, 2000);
})

promesa.then((param)=>{
    console.log(param)
}).catch((error)=>{
    console.warn(error)
}) */

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe = getHeroeById(id)
            if (heroe) {
                resolve(heroe)
            }else{
                reject('El heroe no fue encontrado')
            }

        }, 2000);
    })
}

getHeroeByIdAsync(5).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.warn(error);
})

