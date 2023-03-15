import "./App.css";
import { NavBar, Home, Products, ProductInfo,Cart } from "./Component";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={ProductInfo} />
        <Route exact path="/cart" Component={Cart} />

      </Routes>
    </>
  );
}

export default App;
