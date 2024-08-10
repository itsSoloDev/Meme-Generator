import trollface from '../assets/TrollFace.svg'
export default function Header(){
    return(
        <header className='header'> 
            <img src={trollface} className='nav-logo' />
            <h3 className='header-title'>Meme Generator</h3>
           {/* <h5 className='header-content'>React Course -Project 3</h5>  */}
        </header>
    )
}