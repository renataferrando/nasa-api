import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Layout from "./components/Layout";
import { ImagesContextProvider } from "./context/ImagesContext";
import { RoversContextProvider } from "./context/RoversContext";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RoversContextProvider>
          <ImagesContextProvider>
            <Routes>
              <Route exact path="/nasa-api" element={<Home />} />
              <Route exact path="/:id/" element={<Collections />} />
            </Routes>
          </ImagesContextProvider>
        </RoversContextProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
