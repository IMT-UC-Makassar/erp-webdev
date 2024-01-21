import logo from '/src/assets/logo-CE.jpg'
import {Link, useNavigate} from "react-router-dom";
import logoutIcon from "../../assets/logout-icon.png"
import {useAuth} from "../../services/authContext.jsx";


function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return(
        <div id="header" className="flex flex-row h-16 w-full bg-sky-200 px-10 content-end select-none">
            <div className="w-1/2 flex">
                <div className=" flex flex-row items-center">
                    <Link to="/home" className="flex">

                    <img src={logo} alt="" className="w-9 h-9 rounded-xl"/>
                    </Link>
                </div>
                <Link to="/home" className="flex">
                    <div className="flex flex-col justify-center text-sm ml-4 ">
                        <strong className="text-blue-600">COORPORATE</strong>
                        <strong className="text-orange-400">ENTREPENEURSHIP</strong>
                    </div>
                </Link>
            </div>
            <div className="flex w-1/2 justify-end">
                <div className="flex items-center m-5">
                    <Link to="/">
                    <img src={logoutIcon} alt="logout" className="w-6 h-6" onClick={handleLogout}/>
                    </Link>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Header;