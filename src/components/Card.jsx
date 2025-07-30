import './Card.css';
export default function Card({styles, image, name,onclick}){
    return(<a href={onclick}><div style={styles} className='card'>
        <img src={image} alt={name} className='card-img'/>
        <h3 className='card-heading'>{name}</h3>
    </div></a>);
}