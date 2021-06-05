import React from 'react';
import Header from "../header/header";
import Chat from "../chat/chat";
import Footer from "../footer/footer";
import './app.css';

const App = () => {

  return (
    <div className="container">
      <Header />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
