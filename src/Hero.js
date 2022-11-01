import img from './images/hero-img.png';

const Hero = () => {
    return ( 
        <div className="hero">
            <img src={img} alt="hero-img" />
            <h2>Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
     );
}
 
export default Hero;