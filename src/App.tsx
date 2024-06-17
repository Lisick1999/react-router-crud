import React from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CreationPage } from "./components/CreationPage";
import { ViewingPage } from "./components/ViewingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/new" element={<CreationPage />} />
      <Route path="/posts/:postId" element={<ViewingPage />} />
    </Routes>
  )
}

export default App
