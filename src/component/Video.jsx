import React from "react";
import "./Video.css"

export default function Video(props){
    return(
        <div className="video--contanier">
           <iframe width="400" height="250" 
           src={props.url} 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
           allowfullscreen>
           </iframe>
            <h1>{props.name}</h1>
        </div>
    )
}