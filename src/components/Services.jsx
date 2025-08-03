import ServiceCard from "./ServiceCard";
import './Services.css'
export default function Services({category, data}){
    const services = [<ServiceCard image={data.img1} userName={data.nm1} profilePic={"/images/wordpress website.png"} description={"I will create resposive wordpress website using Elementor Pro"} price={2500} onclick={'http://localhost:5173/UserService'}/>,
    <ServiceCard image={data.img2} userName={data.nm2} profilePic={"/images/wordpress website.png"} description={data.desc} price={2500} onclick={'/UserService'}/>,
    <ServiceCard image={data.img3} userName={data.nm3} profilePic={"/images/wordpress website.png"} description={data.desc} price={2500}/>,
    <ServiceCard image={data.img4} userName={data.nm4} profilePic={"/images/wordpress website.png"} description={data.desc} price={2500}/>,
];
    return(<div className="services">
        <h2 className="category-name">{category}</h2>
        <div className="services-container">
            {services.map((service)=> service)}

        </div>
    </div>)
}
