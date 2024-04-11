
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./Pages/Home";
import { MyWeather } from "./Pages/MyWeather";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/myweather" element={<MyWeather />} />
            </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
