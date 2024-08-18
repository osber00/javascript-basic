
const apiKey = '2luNjAulMlmq1r4T2uSC7f5S1QHuSKpD'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)

peticion
    .then((respuesta) => (
        respuesta.json()
    ))
    .then(({data}) => {
        //console.log(data.images.original.url)
        const {url} = data.images.original
        const imagen = document.createElement('img')
        imagen.src = url
        document.body.append(imagen)
    }
    )