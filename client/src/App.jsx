import FormLogin from "./pages/LogeIn";
import FormRegistration from "./pages/SignUp";
import NotFound from "./components/notfound/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import ProfileSection from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<FormRegistration />}></Route>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route path="/ profile" element={<ProfileSection />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
