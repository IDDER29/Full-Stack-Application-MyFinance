import FormLogin from "./pages/LogeIn";
import FormRegistration from "./pages/SignUp";
import NotFound from "./components/notfound/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProfileSection from "./pages/ProfileSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<FormRegistration />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/" element={<Landing />} />

        {/* Private Routes */}
        <Route path="/home" element={<PrivateRoute Component={Home} />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute Component={Dashboard} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute Component={ProfileSection} />}
        />

        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
