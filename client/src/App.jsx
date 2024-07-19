import FormLogin from "./pages/LogeIn";
import FormRegistration from "./pages/SignUp";
import NotFound from "./components/notfound/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProfileSection from "./pages/ProfileSection";


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<FormRegistration />}></Route>
          <Route path="/login" element={<FormLogin />}></Route>
          {/* on of the privet routs */}
          <Route path="/profile" element={ <PrivateRoute Component={<ProfileSection/>} /> }></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter> */}
      <ProfileSection/>
    </>
  );
}

export default App;
