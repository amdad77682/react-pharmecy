import React, { Component } from "react";

import { Header } from "./modules/header";
import { Footer } from "./modules/footer";
import { Massage } from "./modules/massage";
import { Navigation } from "./modules/navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Massage />
        <Footer />
      </div>
    );
  }
}

export default App;
