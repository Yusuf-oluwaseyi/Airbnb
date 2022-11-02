import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import swim from './images/swimmer.png';
import wed from './images/wedding.png';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Card img={swim} />
    <Card img={wed} />
    </div>
  );
}

export default App;