export const getGif = async(category)=>{
    const apiKey = 'zbl3l3ISVamhAh0xhAXTaAJ9Pwtxqmtg';
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=zbl3l3ISVamhAh0xhAXTaAJ9Pwtxqmtg`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    return gifs;
    
}