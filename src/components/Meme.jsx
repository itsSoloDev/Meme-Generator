import memesData from "./memesData"
export default function Meme(){
    function getMemeData(){
        const data=memesData.data.memes;
        const random =Math.floor(Math.random*data.length());
        const url = data[random].url;
        console.log(url);
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form-input"  placeholder="Top text" />
                <input type="text" className="form-input" placeholder="Bottom text"  />
                <button className="form-button" onClick={getMemeData}>Get a new meme image 🖼</button>
            </div>
        </main>
    )
} 