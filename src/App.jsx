import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Displays/Login/Login.jsx'
import HomePage from "./Displays/Home/HomePage.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </Router>

  )
}

export default App
