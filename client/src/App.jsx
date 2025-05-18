import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import NotFount from "./Pages/NotFount";
const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
         <Route path="/success" element={<Success/>} /> 
          <Route path="*" element={<NotFount/>} /> 

      </Routes>
    </Router>
  
    </>
   
  );
};
export default App;
