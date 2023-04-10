import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Assignment7 from "./labs/a7";
import HomeComponent from "./tuiter/home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Labs />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/tuiter" element={<HomeComponent />} />
        <Route path="tuiter/homenew" element={<HomeComponent />} />
        <Route path="tuiter/explorenew" element={<Tuiter />} />
        <Route path="/a7" element={<Assignment7 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
