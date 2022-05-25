import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Product from "./components/product";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <h1>Welcome to WhoKnows</h1>
      <Navbar></Navbar>

      <Catalog></Catalog>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
    </div>
  );
}

export default App;
