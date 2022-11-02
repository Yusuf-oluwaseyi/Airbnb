import {FaStar} from "react-icons/fa"

const Card = (props) => {


    return ( 
        <div className="card">
             <img src={props.img} alt='swimmer' />
            <span><FaStar color='gold' /> 5.0 (6)USA</span>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
     );
}

export default Card;