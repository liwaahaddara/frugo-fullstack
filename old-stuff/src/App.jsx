import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';

// Below are import commands for the UI components
import NotLoggedInHomePage from './components/HomePage/NotLoggedInHomePage';
import NotLoggedInProductsPage from './components/ProductsPage/NotLoggedInProductsPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';

// imports for the 'Customer' user
import CustomerHomePage from './components/CustomerPages/CustomerHomePage';
import CustomerProductsPage from './components/CustomerPages/CustomerProductsPage';
import CustomerCartPage from './components/CustomerPages/CustomerCartPage';
import CustomerOrderConfirmation from './components/CustomerPages/CustomerOrderConfirmation';
import CustomerCompletedOrders from './components/CustomerPages/CustomerCompletedOrders';
import CustomerViewProfile from './components/CustomerPages/CustomerViewProfile';

// imports for the 'Merchant' user
import MerchantHomePage from './components/MerchantPages/MerchantHomePage';
import MerchantProductsPage from './components/MerchantPages/MerchantProductsPage';
import MerchantAddProduct from './components/MerchantPages/MerchantAddProduct';
import MerchantOrders from './components/MerchantPages/MerchantOrders';
import MerchantViewProfile from './components/MerchantPages/MerchantViewProfile';

// imports for the 'Admin' user'
import AdminHomePage from './components/AdminPages/AdminHomePage';
import AdminMerchantList from './components/AdminPages/AdminMerchantList';
import AdminAddMerchant from './components/AdminPages/AdminAddMerchant';
import AdminUpdateMerchant from './components/AdminPages/AdminUpdateMerchant';
import AdminCustomerList from './components/AdminPages/AdminCustomerList';
import AdminViewProfile from './components/AdminPages/AdminViewProfile';

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

        <Route exact path='customer' element={<CustomerHomePage />} />
        <Route exact path='customer/products' element={<CustomerProductsPage />} />
        <Route exact path='customer/cart' element={<CustomerCartPage />} />
        <Route exact path='customer/order-confirmation' element={<CustomerOrderConfirmation />} />
        <Route exact path='customer/completed-orders' element={<CustomerCompletedOrders />} />
        <Route exact path='customer/profile' element={<CustomerViewProfile />} />


        <Route exact path='merchant' element={<MerchantHomePage />} />
        <Route exact path='merchant/products' element={<MerchantProductsPage />} />
        <Route exact path='merchant/add-product' element={<MerchantAddProduct />} />
        <Route exact path='merchant/orders' element={<MerchantOrders />} />
        <Route exact path='merchant/profile' element={<MerchantViewProfile />} />


        <Route exact path='admin' element={<AdminHomePage />} />
        <Route exact path='admin/merchant-list' element={<AdminMerchantList />} />
        <Route exact path='admin/add-merchant' element={<AdminAddMerchant />} />
        <Route exact path='admin/update-merchant' element={<AdminUpdateMerchant />} />
        <Route exact path='admin/customer-list' element={<AdminCustomerList />} />
        <Route exact path='admin/profile' element={<AdminViewProfile />} />


        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;