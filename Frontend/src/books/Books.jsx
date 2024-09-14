import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Store from "../components/Store";

function Books() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <div className="min-h-screen dark:bg-slate-900 dark:text-white">
          <Store />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Books;
