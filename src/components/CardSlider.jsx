import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Category from '../assets/category.webp';
import Card from "./Card";
import './CardSlider.css';
import { useState } from 'react';
export default function CardSlider(){
    let [index, setindex] = useState(0)
    let[move, setmove]= useState('');
    const cards = [  <Card styles={{width:"300px"}} image={"https://i.pinimg.com/236x/e5/e5/d4/e5e5d44193014f6e9ded49188341c95a.jpg"} name={"App Development"}/>,
      <Card styles={{width:"300px"}} image={"https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Web Development"}/>,
        <Card styles={{width:"300px"}} image={"https://i.pinimg.com/474x/90/90/5e/90905ee891a9717d1eaa166ec3099f94.jpg"} name={"App Design"}/>,  
        <Card styles={{width:"300px"}} image={"https://i.pinimg.com/236x/cb/0a/76/cb0a762c2dfab9d750f4921024aa06aa.jpg"} name={"Artificial Inteligence"}/>,
        <Card styles={{width:"300px"}} image={"https://i.pinimg.com/474x/7c/c6/6c/7cc66c68ad9763d68bcd65c6e83c8d36.jpg"} name={"Data Science"}/>,  
        <Card styles={{width:"300px"}} image={"https://i.pinimg.com/236x/5c/1b/70/5c1b701f8f2c8c11276f86a010ace274.jpg"} name={"Blockchain"}/>];
    function updateSlideTrack(){
        setmove(`translateX(-${index * 600}px)`);
    }

    let slideLeftClicked = ()=>{
        if(index>0){
            setindex(index--);
            }
            updateSlideTrack()


    }
    let slideRightClicked = ()=>{
      if(index <(cards.length-4)/2){
            setindex(index++);
      }

updateSlideTrack()
        
            }
    
    return(<div className='card-slider'>
        <button className='slide-left' onClick={slideLeftClicked}>{<ArrowBackIosIcon/>}</button>
        <div className='cards-container'>
        <div className='cards' style={{ width:`${cards.length*300+cards.length*8}px`,transform: move, transition:" transform 0.3s"}}>
            {cards.map((card,index)=> card)}
        </div>
        </div>
        <button className='slide-right' onClick={slideRightClicked}>{<ArrowForwardIosIcon/>}</button>
    </div>);
}