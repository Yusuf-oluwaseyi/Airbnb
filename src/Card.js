import swim from './images/swimmer.png';
import {FaStar} from "react-icons/fa"

const Card = () => {


    return ( 
        <div className="card">
             <img src={swim} className='card_image' alt='swimmer' />
            <span><FaStar color='gold' /> 5.0 (6)USA</span>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
     );
}

export default Card;