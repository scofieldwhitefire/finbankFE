import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "pages/Login";
import Homex from "./pages/dashboard/Home";
import { checkAuth } from "features/users";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const App = () => {
    const dispatch = useDispatch();
    const [ch, seCh] = useState(!1)

    useEffect(() => {
      dispatch(checkAuth());
    }, [ch])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Homex />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
