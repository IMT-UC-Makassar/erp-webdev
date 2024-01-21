import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import PrivateRoute from "./router/privateRoute.jsx";
import PublicRoute from "./services/publicRoute.jsx";

function App() {
    return (<Router>
            <Routes>
                <Route path="/"
                       element={<PublicRoute element={<Login/>}/>}
                />
                <Route path="/404" element={<NotFoundPage/>}/>
                <Route
                    path="/home"
                    element={<PrivateRoute element={<HomePage/>}/>}
                />
                <Route
                    path="/inventorylist"
                    element={<PrivateRoute element={<InvenroryList/>}/>}
                />
                <Route
                    path="/meetinglist"
                    element={<PrivateRoute element={<MeetingList/>}/>}
                />
                <Route
                    path="/meetinglist/meetingdetailed"
                    element={<PrivateRoute element={<MeetingDetailed/>}/>}
                />
                <Route
                    path="/profile"
                    element={<PrivateRoute element={<Profile/>}/>}
                />
                <Route
                    path="/projectlist"
                    element={<PrivateRoute element={<ProjectList/>}/>}
                />
                <Route
                    path="/projectlist/projectdetailed"
                    element={<PrivateRoute element={<ProjectDetailed/>}/>}
                />
                <Route
                    path="/finance"
                    element={<PrivateRoute element={<Finance/>}/>}
                />
            </Routes>
        </Router>)
}

export default App
