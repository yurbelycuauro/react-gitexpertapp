import React from 'react'

export default function GifGridItem({title,url}) {
    return (
        <div className="card">
            <img src={url} alt={title}></img>
            <p> {title} </p>
        </div>
    )
}
