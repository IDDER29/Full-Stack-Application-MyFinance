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
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<FormRegistration />} />
        <Route path="/login" element={<FormLogin />} />

        {/* Protected Route */}
        <Route
          path="/profile"
          element={<PrivateRoute component={ProfileSection} />}
        />

        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
