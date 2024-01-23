import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Displays/Login/Login.jsx'
import HomePage from "./Displays/Home/HomePage.jsx";
import NotFoundPage from "./Displays/NotFound/Error.jsx"
import InvenroryList from "./Displays/Inventory/InvenroryList.jsx";
import MeetingList from "./Displays/Meeting/MeetingLIst.jsx";
import MeetingDetailed from "./Displays/Meeting/MeetingDetailed.jsx";
import Profile from "./Displays/Profile/Profile.jsx";
import ProjectDetailed from "./Displays/Project/ProjectDetailed.jsx";
import ProjectList from "./Displays/Project/ProjectList.jsx";
import Finance from "./Displays/Finance/Finance.jsx";
import InputMeeting from "./Displays/Meeting/MeetingInput.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/404' element={<NotFoundPage/>}/>
          <Route path='/inventorylist' element={<InvenroryList/>}/>
          <Route path='/meetinglist' element={<MeetingList/>}/>
          <Route path='/meetinglist/meetingdetailed' element={<MeetingDetailed/>}/>
          <Route path='/meetinglist/meetinginput' element={<InputMeeting/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/projectlist' element={<ProjectList/>}/>
          <Route path='/projectlist/projectDetailed' element={<ProjectDetailed/>}/>
          <Route path='/finance' element={<Finance/>}/>
        </Routes>
      </Router>

  )
}

export default App
