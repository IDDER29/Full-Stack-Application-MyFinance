import FormLogin from "./pages/LogeIn";
import FormRegistration from "./pages/SignUp";
import NotFound from "./components/notfound/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signup" element={<FormRegistration />}></Route>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
