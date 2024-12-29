import './App.css';
import Products from './components/Products';
import Search from './components/Search';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
	  <Search /> <br/>

	 <Searchbar /> 
	<br/>
      <Products />
    </div>
  );
}

export default App;
