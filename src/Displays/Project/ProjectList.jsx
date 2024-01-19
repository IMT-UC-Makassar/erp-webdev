import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"

function InvenroryList(){
    return(
        <>
            <Header />
            <Menu/>
            <p>Project list</p>
            <Footer />
        </>
    )
}

export default InvenroryList