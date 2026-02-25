import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import WrapperPage from "./components/WrapperPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<WrapperPage src="https://thehighlandcafe.github.io/hioswebcore/welcome.html" title="Home" />}
          />
          <Route
            path="restaurant"
            element={<WrapperPage src="https://thehighlandcafe.github.io/hioswebcore/restaurant.html" title="Eat" />}
          />
          <Route
            path="hotel"
            element={<WrapperPage src="https://thehighlandcafe.github.io/hioswebcore/hotelactivities.html" title="Stay" />}
          />
          <Route
            path="roomkey"
            element={<WrapperPage src="https://thehighlandcafe.github.io/hioswebcore/roomkey.html" title="Room Key" />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}