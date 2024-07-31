import Header from './components/Header'
import Meme from './components/Meme'
import './App.css'
import memesData from './components/memesData'

export default function App(){
  const memeImage=memesData.map(item=>{
    return(
      console.log(item.url)
    )
  })
  return(
    <>
    <Header />
    <Meme onclick={memeImage}/>
    </>
  )
}