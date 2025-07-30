import heroImage from '../assets/hero.jpeg';
import SearchBox from './SearchBox';
import './Hero.css';
export default function Hero(){
    return(
        <div id="hero">
            {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vUYf2hp04P0Hy1_ybF--cwEDPz5FGX9pHA&usqp=CAU"} alt="" /> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1ECBE1" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,112C672,117,768,203,864,234.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
            <div className='hero-content'>
            <h1 className='hero-h1'>Find Best Dev Sharks</h1>
            <h1 className='hero-h1'>here</h1>
            <SearchBox styles={{ width:"100%", height: "55px"} }/>
            <h2 className='hero-h2'>All For Tech</h2>
            </div>
        </div>
    );
}