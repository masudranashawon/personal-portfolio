import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import CustomCursor from "./components/CustomCursor";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className='app'>
      <div className='noise'></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <ToastContainer />
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
