import React from 'react'
import useFetchGrifs from '../hooks/useFetchGrifs'
//import { getGif } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    const {data : images,loading} = useFetchGrifs(category);
    
    return (
        <> 
        <h1>{category}</h1>
        { loading && <p>Loading</p>}
        <div className="card-grid">
            {
               images.map(img=>(
                <GifGridItem 
                key={img.id}
                {...img}/>
               )
               )
           }
           
        </div>
        </>
    )
}
