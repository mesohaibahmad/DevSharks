import { useNavigate } from "react-router-dom";

export default function Logo(){
    const navigate = useNavigate()
    return (<span onClick={()=>navigate("/")} style={{cursor:'pointer' ,fontSize: '30px', fontWeight: "600", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>dev-Sharks</span>);
}