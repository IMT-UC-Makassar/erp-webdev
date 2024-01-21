import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import AddNewMeeting from './AddNewMeeting.jsx';

function MeetingList(){
    return(
        <>
            <Header />
            <Menu/>
            <p>Meeting List</p>
            <Footer />
            <AddNewMeeting></AddNewMeeting>
        </>
    )
}

export default MeetingList