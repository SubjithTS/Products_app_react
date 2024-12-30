import './App.css';
import Products from './components/Products';
import Form from './components/Form';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
	  <Form /> <br/>

	 <Searchbar /> 
	<br/>
      <Products />
    </div>
  );
}

export default App;
