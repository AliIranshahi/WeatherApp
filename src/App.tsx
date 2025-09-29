import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import './fonts.css';
import ProjectPage from "./components/protect_page/HomeProtect";
import LoginProtect from "./components/protect_page/LoginProtect";
import 'swiper/css';
import 'swiper/css/pagination';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectPage><Home /></ProjectPage>} />
          <Route path="/login" element={<LoginProtect><Login /></LoginProtect>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
