import igLogo from "../../assets/Instagram.png"

const Footer = ({className}) => {

    const openInstagram = () => {
        window.open('https://www.instagram.com/', '_blank');
    };

    return(
        <div className={`flex flex-col ${className} bg-sky-200 px-16`}>
            <div className="border-b-2 border-orange-300 w-full h-3/4 flex justify-end items-center">
                <div className=" flex flex-row items-center justify-center px-2 py-2 rounded-3xl border-2 h-7 w-7 bg-gray-200 mr-3">
                    <a onClick={openInstagram} className="cursor-pointer flex justify-center items-center rounded-3xl">
                        <img src={igLogo} alt="" className="w-4 h-4 absolute flex justify-center items-center"/>
                    </a>
                </div>
            </div>
            <div className="flex justify-end text-xs pr-8 py-0.5">
                <p>© 2022 | by ICT Department</p>
            </div>
        </div>
    )
}

export default Footer