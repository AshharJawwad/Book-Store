import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebooks from "../components/Freebooks";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Banner />
        <Freebooks />
        <Footer />
      </div>
    </>
  );
}

export default Home;
