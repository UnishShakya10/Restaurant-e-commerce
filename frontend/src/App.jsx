import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import MenuPage from "./Pages/MenuPage";
import NotFound from "./Pages/NotFound";
import ReservationPage from "./Pages/ReservationPage";
import Success from "./Pages/Success";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RestaurantDataProvider } from "./context/RestaurantDataProvider.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <RestaurantDataProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reservations" element={<ReservationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
        <Notifications position="top-right" />
      </BrowserRouter>
    </RestaurantDataProvider>
  )
}

export default App