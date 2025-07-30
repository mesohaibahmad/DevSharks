import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({handleSubmit,styles,id}){
    let [input, setinput]= useState("");
    let handleInput = (evt)=>{
        setinput(evt.target.value);
    }




    return (
        <form method='get' action='http://localhost:5173/query'  onSubmit={(evt)=>{handleSubmit(evt,input)}} style={styles} id={id} className='search-box'>
        <input id="search-input" type="text" placeholder="Search a dev service" value={input} onChange={handleInput}/>
        <button id='search-button' type='submit'><SearchIcon style={{width:"90%"}}/></button>
        </form>
    );
}