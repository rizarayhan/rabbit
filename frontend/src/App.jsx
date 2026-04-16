import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      {/* 
    www.rabit.com/home
    www.rabit.com/products
    www.rabit.com/cart
    */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User layout */}
        </Route>
        <Route>{/* Admin layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
