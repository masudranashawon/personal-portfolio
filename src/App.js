import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

const App = () => {
  useSmoothScroll();

  return (
    <div className='app'>
      <div className='noise'></div>
      <Navbar />
      <Socials />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
};

export default App;
