import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch'])
    // const handleAdd = (e)=>{
    //    const categoryNew = 'new elem';
    //    //setCategories([...categories,categoryNew]);
    //    setCategories(cat=>[...cat,categoryNew])


    // }
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((category)=>
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    )
                }
            </ol>
            <hr />
        </>
    )
}
