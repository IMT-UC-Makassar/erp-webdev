import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import NotFound from "../../Components/ErrorPage/Error.jsx"

function HomePage() {
    return(
        <>
            <Header />
            <Menu/>
            <NotFound/>
            <p>Home page</p>
            <Footer />
        </>
    )
}

export default HomePage;