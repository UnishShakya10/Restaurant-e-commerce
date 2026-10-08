import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import { RestaurantDataContext, restaurantData } from "./context/RestaurantDataContext";

const App = () => {
  return (
    <RestaurantDataContext.Provider value={restaurantData}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Notifications position="top-right" />
      </Router>
    </RestaurantDataContext.Provider>
  )
}

export default App