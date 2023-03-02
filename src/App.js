import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';


function App() {
  const cards = data.map(item => {
    return (
    <Card 
    img={item.coverImg} 
    title={item.title}
    discription={item.discription}
    price={item.price}
    rating={item.stats.rating}
    location={item.location}
    />
    )
  })

  return (
    <div className="App">
    <Navbar />
    <Hero />
    {cards}
    </div>
  );
}

export default App;