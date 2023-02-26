import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>fruGo</h1>
      <Routes>
        <Route path='/products' element={<h1>PRODUCTS</h1>} />
      </Routes>
    </div>
  );
}

export default App;
