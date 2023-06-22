import { Routes, Route } from "react-router-dom";
import BookShelfSelect from "./Component/BookShelfSelect";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/test" element={<BookShelfSelect />} />
      </Routes>
    </div>
  );
}
