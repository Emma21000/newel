import './App.css';
import Hero from './components/Hero';
import { hero_data } from './data/hero';
import { data_menu } from './data/menu';
import Menu from './Navbar/Menu';

function App() {
  return (
    <div>
      <Menu data={data_menu} />
      <Hero data={hero_data} />
    </div>
  );
}

export default App;
