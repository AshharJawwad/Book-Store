import Books from "./books/Books";
import Signup from "./components/Signup";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Books />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
