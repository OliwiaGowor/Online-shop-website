import React from 'react';
import "./App.css";
import Categories from "./components/Categories";
import NewProducts from "./components/NewProducts";
import PageNavUpper from "./components/PageNavUpper";
import PageNavLower from "./components/PageNavLower";
import Home from "./components/Home";
import Qualities from "./components/Qualities";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <PageNavUpper />
      <PageNavLower />
      <Home />
      <Qualities />
      <Categories />
      <NewProducts />
      <Footer />
    </div>
  );
}

export default App;
  
