import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
    </div>
  );
};

export default App;
