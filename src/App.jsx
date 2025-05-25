import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado/Listado";
import Footer from "./layout/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Header from "./layout/Header/Header";
import Home from "./layout/Home/Home";
import CartProvider from "./context/CartContext/CartContext";
import CartContent from "./components/cart/CartContent/CartContent";
import Checkout from "./components/cart/Checkout/Checkout";
import DetailPage from "./components/Detail/DetailPage/DetailPage";
import Practica from "./components/Practica/Practica";
import Results from "./components/Results/Results";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/listado" Component={Listado} />
          <Route path="/cartContent" Component={CartContent} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/detailPage/:id" Component={DetailPage} />
          <Route path="/practica/" Component={Practica} />
          <Route path="/results/" Component={Results} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
