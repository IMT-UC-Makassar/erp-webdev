import logo from '/src/assets/logo-CE.jpg'
import {Link, useNavigate} from "react-router-dom";
import logoutIcon from "../../assets/logout-icon.png"
import {useAuth} from "../../services/authContext.jsx";
import LogoutConfirmation from "../LogoutConfirmation/logoutConfirmation.jsx";
import {useState} from "react";

const bgHeader = {
    backgroundColor: "#C9C9C9",
};
const text  = {
    backgroundColor: "#C9C9C9",
};
const Header = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isLogoutConfirmationOpen, setIsLogoutConfirmationOpen] = useState(false);

    const openLogoutConfirmation = () => {
        setIsLogoutConfirmationOpen(true);
    };

    const closeLogoutConfirmation = () => {
        setIsLogoutConfirmationOpen(false);
    };

    const handleLogout = () => {

        // Add your logout logic here
        // For now, let's just close the confirmation dialog
        closeLogoutConfirmation();
        if(isLogoutConfirmationOpen){
          logout();
          navigate('/');
        }
    };

    return (
        <div
            id="header"
            className="flex flex-row h-16 w-full bg-sky-200 px-10 content-end select-none"
            style={bgHeader}
        >
            <div className="w-1/2 flex">
                <div className="flex flex-row items-center">
                    <Link to="/home" className="flex">
                        <img src={logo} alt="" className="w-9 h-9 rounded-xl" />
                    </Link>
                </div>
                <Link to="/home" className="flex">
                    <div className="flex flex-col justify-center text-sm ml-4 ">
                        <strong className="" style={text}>COORPORATE</strong>
                        <strong className="text-orange-400">ENTREPRENEURSHIP</strong>
                    </div>
                </Link>
            </div>
            <div className="flex w-1/2 justify-end">
                <div className="flex items-center m-5">
                    <img
                        src={logoutIcon}
                        alt=""
                        className="w-6 h-6 cursor-pointer" // Add cursor-pointer to indicate it's clickable
                        onClick={openLogoutConfirmation}
                    />
                    {isLogoutConfirmationOpen && (
                        <div className="fixed top-0 left-0 w-full h-full" onClick={closeLogoutConfirmation}></div>
                    )}

                    {isLogoutConfirmationOpen && <LogoutConfirmation onConfirm={handleLogout} onCancel={closeLogoutConfirmation} />}

                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Header;
