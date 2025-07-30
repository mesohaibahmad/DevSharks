import SearchBox from "./SearchBox";
import './NavigationBar.css';
import Logo from "./Logo";
import AccountMenu from "./AccountMenu";
import { useState } from "react";
import { Margin } from "@mui/icons-material";

export default function NavigationBar({signIn}){
    let [scrollV, setscrollV] = useState(0);
    let [activeNav, setactiveNav ]= useState(false);
    let getScrollV = function () {
       setscrollV( window.scrollY);
       if(scrollV>200){
        setactiveNav (true);
       }
       else
       {
        setactiveNav(false);
       }
};
    
    window.addEventListener("scroll", getScrollV);
    let searchFor= (evt, searched)=>{
    }
   return (
    <nav id="nav-bar" style={activeNav?{backgroundColor: "white",color:"#1ECBE1", }:{}}>
        <div id="nav-left">
        <Logo />
       {activeNav && <SearchBox handleSubmit={searchFor}  id="nav-search"/>}
       </div>
<AccountMenu id="nav-menu" signIn= {signIn}/>
    </nav>
   );
}