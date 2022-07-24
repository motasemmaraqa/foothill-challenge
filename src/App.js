import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './component/Cart';
import ProductsList from './component/ProductsList';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const cartItems = useSelector((st) => st.cart);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Routes>
      <Route path="/" exact element={<ProductsList />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
