import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomeMain from "./pages/HomeMain";
import Register from "./pages/Register";
import User from "./pages/userPages/User";
import Admin from "./pages/adminPages/Admin";
import AdminEdit from "./pages/adminPages/AdminEdit";
import UserEdit from "./pages/userPages/UserEdit";
import UserViewAll from "./pages/userPages/UserViewAll";
import { Context } from "./context/Context";
import AdminCreate from "./pages/adminPages/AdminCreate";

function App() {
  const { user } = useContext(Context);

  // VARIABLE TO CHECK THE USER STATE
  let adminTrue;
  let userTrue;
  let noUserTrue;

  if (!user.user) {
    noUserTrue = true;
    adminTrue = false;
    userTrue = false;
  } else if (user.user.name === "admin") {
    adminTrue = true;
    userTrue = false;
    noUserTrue = false;
  } else {
    userTrue = true;
    adminTrue = false;
    noUserTrue = false;
  }
  console.log(user.user);

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/">
          {noUserTrue && <Route exact path="/" element={<HomeMain/>} />}
          {adminTrue && <Navigate exact to="/admin" />}
          {userTrue && <Navigate exact to="/userhome" />}
        </Route>
        <Route exact path="/userhome" element={<User/>} />
        <Route exact path="/useredit" element={<UserEdit/>} />
        <Route exact path="/userviewall" element={<UserViewAll/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/adminedit/:id" element={<AdminEdit/>} />
        <Route exact path="/admincreate" element={<AdminCreate/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/:time/:name/:id" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
