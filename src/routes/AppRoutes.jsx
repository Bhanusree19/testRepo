import { Navigate, Route, Routes } from "react-router-dom";
import DeviceFrame from "../components/DeviceFrame";
import Cover from "../pages/Cover";
import Splash from "../pages/Splash";
import Onboarding from "../pages/Onboarding";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import MyAccount from "../pages/MyAccount";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Cover />} />

      <Route element={<DeviceFrame />}>
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding" element={<Navigate to="/onboarding/1" replace />} />
        <Route path="/onboarding/:step" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<MyAccount />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
