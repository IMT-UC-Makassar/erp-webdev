import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import meetingIcon from "../../assets/meeting-logo.png"
import nextMeetingIcon from "../../assets/nextMeeting-logo.png"
import profile from "../../assets/profile.png"
import nextProjectIcon from "../../assets/nextProject-logo.png"
import projectIcon from "../../assets/project-logo.png"
import timeIcon from "../../assets/time.png"
import userIcon from "../../assets/user.png"
import {Link} from "react-router-dom";
function HomePage() {

    return(
        <>
            <Header />
            <Menu/>
            <div className="flex flex-col bg-amber-100 h-full w-full justify-center rounded-b-5xl select-none">
                <div className="flex flex-col justify-center items-center mb-16">

                    <div className="flex justify-center border-2 w-1/12 h-full rounded-full mt-20 border-blue-500">
                        <Link to="/profile">

                        <img src={profile} alt=""/>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center mt-6">
                            <p className="text-blue-600 text-2xl">Welcome To <span className="text-yellow-500">CE<span className="text-black">,</span></span></p>
                        </div>
                        <div className="flex justify-center">
                            <strong className="text-xl">Anonymous</strong>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row justify-evenly ">
                    <div className="w-1/5 h-full bg-yellow-200 flex flex-col rounded-xl mb-32">
                        <div className="flex flex-row justify-between border-b-2 m-2 mx-10 border-orange-300">
                            <div className="flex flex-col">
                                <p>Next Meeting</p>
                                <p>Schedule</p>
                            </div>
                            <div className="flex w-11 h-11">
                                <img src={nextMeetingIcon} alt=""/>
                            </div>
                        </div>
                        <div className="flex flex-col mx-14 mb-5 ">
                            <p className="text-left">Jumat, 17 Agustus 2022</p>
                            <p>18.00 WITA</p>
                        </div>
                    </div>
                    <div className="w-1/5 h-full bg-blue-500 flex flex-col rounded-xl text-white">
                        <div className="flex flex-row justify-between border-b-2 m-2 mx-10 ">
                            <div className="flex flex-col ">
                                <p>Next Project</p>
                                <p>Schedule</p>
                            </div>
                            <div className="flex w-9 h-9 ">
                                <img src={nextProjectIcon} alt=""/>
                            </div>
                        </div>
                        <div className="flex flex-col mx-14 mb-5 ">
                            <p className="text-left">Jumat, 17 Agustus 2022</p>
                            <p>18.00 WITA</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full h-full justify-stretch">
                <div className="flex flex-col w-1/2 h-full m-20">
                    <div className="flex flex-row w-full bg-orange-300 px-2 py-4 rounded-t-3xl">
                        <div className="flex mx-3">
                            <img
                                src={meetingIcon}
                                alt=""
                                className="w-6 h-fit"
                            />
                        </div>
                        <div>
                            <p className="text-white">Meeting</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-gray-200 h-full px-7 rounded-b-3xl">
                        {/*meeting dump data*/}
                        <div id="meeting-list"
                             className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black">
                            <div className="flex flex-col">
                                <div className="text-xl py-1">
                                    Judul Meeting
                                </div>
                                <div className="flex w-full flex-row py-1">
                                    <div className="flex w-5 mr-3">
                                        <img src={userIcon} alt="" className="mr-3"/>
                                    </div>
                                    <div>
                                        <p className="text-sm">Bernard</p>
                                    </div>
                                </div>
                                <div className="flex w-full flex-row py-1">
                                    <div className="flex w-5 mr-3">
                                        <img src={timeIcon} alt="" className="mr-3"/>
                                    </div>
                                    <div>
                                        <p className="text-sm">07 April 2022, 16:00 - 17:00 WITA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center bg-blue-700 p-1 px-3 text-white rounded-lg">
                                <p>NEW</p>
                            </div>
                        </div>
                        <div id="meeting-list"
                             className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black">
                            <div className="flex flex-col">
                                <div className="text-xl py-1">
                                    Judul Meeting
                                </div>
                                <div className="flex w-full flex-row py-1">
                                    <div className="flex w-5 mr-3">
                                        <img src={userIcon} alt="" className="mr-3"/>
                                    </div>
                                    <div>
                                        <p className="text-sm">Bernard</p>
                                    </div>
                                </div>
                                <div className="flex w-full flex-row py-1">
                                    <div className="flex w-5 mr-3">
                                        <img src={timeIcon} alt="" className="mr-3"/>
                                    </div>
                                    <div>
                                        <p className="text-sm">07 April 2022, 16:00 - 17:00 WITA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center bg-blue-700 p-1 px-3 text-white rounded-lg">
                                <p>NEW</p>
                            </div>
                        </div>
                        <div className="flex border-4 p-5 justify-center">
                            <Link to="/meetinglist">
                                <p>See All</p>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col w-1/2 h-full m-20">
                    <div className="flex flex-row w-full bg-orange-300 px-2 py-4 rounded-t-3xl">
                        <div className="flex mx-3">
                            <img
                                src={projectIcon}
                                alt=""
                                className="w-6 h-fit"
                            />
                        </div>
                        <div>
                            <p className="text-white">Project</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-gray-200 h-full px-7 rounded-b-3xl">
                        {/*Project dump data*/}
                        <div id="project-list"
                             className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black">
                            <div className="flex flex-col">
                                <div className="text-xl py-1">
                                    Judul Meeting
                                </div>
                                <div className="flex w-5 flex-row py-1">
                                    <img src={userIcon} alt="" className="mr-3"/>
                                    <p className="text-sm">Bernard</p>
                                </div>
                                <div className="flex w-5 flex-row py-1">
                                    <img src={timeIcon} alt="" className="mr-3"/>
                                    <p className="text-sm">Bernard</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-blue-700 p-1 px-3 text-white rounded-lg">
                                <p>NEW</p>
                            </div>
                        </div>
                        <div id="meeting-list"
                             className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black">
                            <div className="flex flex-col">
                                <div className="text-xl py-1">
                                    Judul Meeting
                                </div>
                                <div className="flex w-5 flex-row py-1">
                                    <img src={userIcon} alt="" className="mr-3"/>
                                    <p className="text-sm">Bernard</p>
                                </div>
                                <div className="flex w-5 flex-row py-1">
                                    <img src={timeIcon} alt="" className="mr-3"/>
                                    <p className="text-sm">Bernard</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-blue-700 p-1 px-3 text-white rounded-lg">
                                <p>NEW</p>
                            </div>
                        </div>
                        <div className="flex border-4 p-5 justify-center">
                            <Link to="/projectlist">
                            <p>See All</p>
                            </Link>
                        </div>

                    </div>

                </div>


            </div>
            <Footer/>
        </>
    )
}

export default HomePage;