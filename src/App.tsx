import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import {enableMapSet} from "immer"
import "./App.css";

enableMapSet()
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </Layout>
    </Router>
  );
}
