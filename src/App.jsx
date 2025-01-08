import Navbar from "./Components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router"
import Section1 from "./Components/Section/Section1"
import Section2 from "./Components/Section/Section2"
import Section3 from "./Components/Section/Section3"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/"element ={<Navbar />}/>
    <Route path="fal"element={<Section1 />}/>
    <Route path="ful"element={<Section2 />}/>
    <Route path="dro"element ={<Section3 />}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App

