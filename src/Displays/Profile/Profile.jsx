import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"

function Profile(){
    const userData = {
        email: localStorage.getItem('user.email') ,
        name: localStorage.getItem('user.name'),
        departmen: localStorage.getItem('user.department'),
        position: localStorage.getItem('user.position')
    }
    return(
        <>
            <Header />
            <Menu/>
            <p>profile</p>
            {console.log(userData)}
            <Footer />
        </>
    )
}

export default Profile