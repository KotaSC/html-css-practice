import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { News } from "../components/News/News";
import { Menu } from "../components/Menu/Menu";
import { Contact } from "../components/Contact/Contact";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
