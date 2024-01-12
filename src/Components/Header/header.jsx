import logo from '/src/assets/logo-CE.jpg'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div id="header" className="flex flex-row h-16 w-full bg-sky-200 px-10 content-end">
            <div className="w-1/2 flex">
                <div className=" flex flex-row items-center">
                    <img src={logo} alt="" className="w-9 h-9 rounded-xl"/>
                </div>
                <div className="flex flex-col justify-center text-sm ml-4">
                    <strong className="text-blue-600">COORPORATE</strong>
                    <strong className="text-orange-400">ENTREPENEURSHIP</strong>
                </div>
            </div>
            <div className="flex w-1/2 justify-end">
                <div className="flex items-center">
                    <Link to="/">
                    <img src={logo} alt="" className="w-9 h-9 rounded-xl"/>
                    </Link>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Header;