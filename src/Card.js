import {FaStar} from "react-icons/fa"

const Card = ({img, title, location, price, rating}) => {


    return ( 
        <div className="card">
             <img src={`../images/${img}`} alt='swimmer' />
            <span><FaStar color='gold' /> {rating} (6){location}</span>
            <p>{title}</p>
            <p><strong>From ${price}</strong> / person</p>
        </div>
     );
}

export default Card;