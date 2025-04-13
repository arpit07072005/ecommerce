import './App.css';
import Home from './components/Home';
import Login from './components/Loginpage';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Popular from './components/Popular';
import Laptops from './components/Laptops';
import Menswatches from './components/Menswatches';
import Mobilephones from './components/Mobilephones';
import Smartphones from './components/Smartphones';
import Mensshirt from './components/Mensshirt';
import Item from './components/Item';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';
import Signup from './components/Signup';
function App() {
  return (
    <div>
        <CartProvider>
      <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Offers" element={<Offers/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Popular" element={<Popular/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Laptops" element={<Laptops/>}/>
        <Route path="/Menswatches" element={<Menswatches/>}/>
        <Route path="/mobile-accessories" element={<Mobilephones/>}/>
        <Route path="/Smartphones" element={<Smartphones/>}/>
        <Route path="/Mensshirt" element={<Mensshirt/>}/>
        <Route path="/Item/:id" element={<Item/>}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
  
      </BrowserRouter>
    
      </CartProvider>
    </div>
  );
}

export default App;
