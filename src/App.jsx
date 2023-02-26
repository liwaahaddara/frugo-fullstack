import './App.css';
import { Route, Routes } from 'react-router-dom';

// Below are import commands for the UI components
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />}>
          <Route exact path='products' element={<h1>PRODUCTS</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
