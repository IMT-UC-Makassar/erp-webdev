import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"

function HomePage() {
    return(
        <>
            <Header />
            <Menu/>
            <p>Home page</p>
            <Footer />
        </>
    )
}

export default HomePage;