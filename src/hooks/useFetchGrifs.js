import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";

const useFetchGrifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getGif(category)
        .then((imgs)=>{

            setTimeout(() => {
                console.log(imgs);
                setstate({
                    data:imgs,
                    loading:false
                })
            }, 3000);
        });
    }, [category])

    
    
    return state;

}

export default useFetchGrifs
