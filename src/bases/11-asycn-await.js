
const apiKey = '2luNjAulMlmq1r4T2uSC7f5S1QHuSKpD'

const consulta = async ()=>{
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)
        const {data} = await response.json()
        //console.log(data.images.original)
        const {url} = data.images.original
        console.log(url)
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.warn(error);
    }
}

consulta()