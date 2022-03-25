import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className=" ">Buy Your Technology</h1>
        <h4>laptop Desktop Camera and many more items</h4>
      </header>

      <Shop />
    </div>
  );
}

export default App;
