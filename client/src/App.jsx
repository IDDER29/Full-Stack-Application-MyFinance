import FormLogin from "./components/Auth/LogeIn";
import FormRegistration from "./components/Auth/SignUp"
import NotFound from "./components/notfound/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<FormRegistration/>}></Route>
        <Route path="/login" element={<FormLogin/>}></Route>
        <Route path="/laning" element={<Landing/>}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
