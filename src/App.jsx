import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import VideoPlayer from "./components/Video/VideoPlayer";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import "./app.css";
import Linktree from "./components/LinkedTree/LinkedTree";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className="app_container">
      <Header />
      <Hero />
      <Work />
      <br />
      <br />
      <br />
      
     
      <Experties />
      <br />
      <br />
      <br />
     
    
      <VideoPlayer />
      <br />
      <br />
      <br />
    
      <Linktree/>
      <br />
      <br />
      <br />
   
      <People />
      <Footer />
    </div>
  );
};

export default App;
