import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"

function Profile(){
    return(
        <>
            <Header />
            <Menu/>
            <p>profile</p>
            <Footer />
        </>
    )
}

export default Profile