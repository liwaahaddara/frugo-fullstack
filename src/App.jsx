import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';

// Below are import commands for the UI components
import NotLoggedInHomePage from './components/HomePage/NotLoggedInHomePage';
import NotLoggedInProductsPage from './components/ProductsPage/NotLoggedInProductsPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import CustomerHomePage from './components/CustomerPages/CustomerHomepage';

function App() {
  return (
    <div className="App">
      <NavLink
        key="fruGo-title"
        style={{
          textDecoration: "none"
        }}
        to="/"
      >
        <h1 className="fruGo-title">fruGo</h1>
      </NavLink>
      <Routes>
        <Route exact path='/' element={<NotLoggedInHomePage />} />

        <Route exact path='products' element={<NotLoggedInProductsPage />} />

        <Route exact path='login' element={<Login />} />

        <Route exact path='register' element={<Register />} />

        <Route exact path='customer' element={<CustomerHomePage />}>

        </Route>

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
