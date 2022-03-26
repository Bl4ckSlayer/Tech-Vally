import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Shop from "./Components/Shop/Shop";
import Faq from "./Components/Faq/Faq";

function App() {
  return (
    <div className="container">
      <header className="text-center mb-3 pb-4">
        <h1 className="text-success">Tech Vally</h1>
        <h4>Buy laptop Desktop Camera and many more items</h4>
      </header>

      <Shop />
      <Faq />
    </div>
  );
}

export default App;
