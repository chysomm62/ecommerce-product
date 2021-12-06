import "./App.css";
import Nav from "./components/nav/nav";
import Body from "./components/Body";
import Men from "./components/Men";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/content/Products";

function App() {
  const { products } = Products;
  // const [cartItems, setCartItems] = useState([]);
  const [currentQty, setCurrentQty] = useState(1);

  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  return (
    <Router>
      <div className="App">
        <Nav
          products={products}
          currentQty={currentQty}
          setCurrentQty={setCurrentQty}
        />
        <Switch>
          <Route exact path="/">
            <Body
              products={products}
              setCurrentQty={setCurrentQty}
              currentQty={currentQty}
            />
          </Route>
          <Route exact path="/Men">
            <Men />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
