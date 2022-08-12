import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
