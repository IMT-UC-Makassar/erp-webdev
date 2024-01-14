import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"

function Finance() {
    return(
        <>
            <Header />
            <Menu/>
            <p>Finance</p>
            <Footer />
        </>
    )
}

export default Finance;