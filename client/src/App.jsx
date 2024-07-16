import FormLogin from "./components/signup-in/LogeIn";
import FormRegistration from "./components/signup-in/SignUp"
import NotFound from "./components/notfound/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<FormRegistration/>}></Route>
        <Route path="/login" element={<FormLogin/>}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
