import memesData from "./memesData"
import React, { useState } from "react";
export default function Meme(){
    const [meme,setMeme] = useState({
        topText : "",
        bottomText :"",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme,setAllMeme] =useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(rev=>rev.json())
        .then(data=>setAllMeme(data.data.memes))
    },[])
    console.log(allMeme);

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevState=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }


    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMeme.length);
        const url = allMeme[randomNumber].url
        setMeme(prevState=>{
            return(
                {
                    ...prevState,
                    randomImage: url
                }
            )
        }
        )
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                 />

                <input
                    type="text" 
                    className="form-input"
                    placeholder="Bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                 />

                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
               <img src={meme.randomImage} className="meme-image" />
               <h2 className="meme--text top">{meme.topText}</h2>
               <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
} 