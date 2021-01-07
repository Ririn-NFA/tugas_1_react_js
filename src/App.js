import React, { Component } from "react";
import MenuUtama from './Page/MenuUtama';
import MenuProduct from './Page/MenuProduct';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangkami';

const Header = () => {
  return(
    <h1>Ini halaman untuk Header</h1>
  );
};

const Footer = () => {
  return(
    <h1>Ini halaman untuk Footer</h1>
  );
};

class App extends Component {
  render(){
    return (
      <div>
        <Header />

        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />

        <Footer />
      </div>
    );
  }
}

export default App;
