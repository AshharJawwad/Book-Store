import Books from "./books/Books";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Books />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
