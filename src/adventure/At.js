import React, { Component } from 'react';


const AtSeaLevel = [
    { url: `${process.env.PUBLIC_URL}/At-sea-level-img/Island-Camping .jpg` },
    { url: `${process.env.PUBLIC_URL}/At-sea-level-img/Jetskiing.jpg` },
    { url: `${process.env.PUBLIC_URL}/At-sea-level-img/Kayaking.jpg` },
    { url: `${process.env.PUBLIC_URL}/At-sea-level-img/Sailing.jpg` },
    { url: `${process.env.PUBLIC_URL}/At-sea-level-img/Surfing.jpg` },
    
]

export class At extends Component{
    render = () => {
        return (
            <div>
                <h1>AtSeaLevel</h1>
            </div>
             
        )
    }
}