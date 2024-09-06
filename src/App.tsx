import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Products from "./components/Products";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container app-grid">
        <Products />
        <Cart />
        <Modal></Modal>
      </div>
    </>
  );
}

export default App;
