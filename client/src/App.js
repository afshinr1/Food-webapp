import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantList from "./components/Restaurantlist/RestaurantList";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={RestaurantList} />
      
    </Router>
  );
}

export default App;
