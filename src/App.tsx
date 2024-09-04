import Cart from "./components/Cart";
import Products from "./components/Products";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container app-grid">
        <Products />
        <Cart />
      </div>
    </>
  );
}

export default App;
