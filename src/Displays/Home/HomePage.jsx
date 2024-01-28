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
import {useEffect, useState} from "react";
function HomePage() {
    const bgBigCard = {
        backgroundColor: "#ECEAC6", // Yellow
    };

    const bgMeetingCard = {
        backgroundColor: "#009FBC", // Blue Gray
    };

    const bgProjectCard = {
        backgroundColor: "#DDAD75", // Blue Gray
    };

    const headerList = {
        backgroundColor: "#F2C22A", // Orange
    };

    const bgList = {
        backgroundColor: "#FFFFFF", // Light Gray
    };

    const bgStatus = {
        backgroundColor: "#2196F3", // Blue
    };

    const boxShadow = {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    };


    const [meetingData, setMeetingData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    // Assume you have the authentication token available
    const authToken = localStorage.getItem('token');



    const formatDate = (dateString) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
        return formattedDate;
    };

    const formatTime = (dateString) => {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
        };
        const formattedTime = new Date(dateString).toLocaleTimeString('id-ID', options);
        return formattedTime;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch meetings data
                const meetingsResponse = await fetch('http://localhost:8888/api/v1/meetings', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                // Handle the response for meetings
                if (meetingsResponse.ok) {
                    const meetingsData = await meetingsResponse.json();
                    meetingsData.sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart));
                    console.log('Meetings data:', meetingsData);
                    setMeetingData(meetingsData);
                } else {
                    if (meetingsResponse.status === 403) {
                        console.error('Unauthorized: Authentication token is invalid or expired.');
                    } else {
                        console.error(`Failed to fetch meetings. Status: ${meetingsResponse.status}`);
                    }
                }

                // Fetch projects data
                const projectsResponse = await fetch('http://localhost:8888/api/v1/project', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                // Handle the response for projects
                if (projectsResponse.ok) {
                    const projectsData = await projectsResponse.json();
                    if (!projectsData) {
                        console.error('Projects data is empty.');
                        return;
                    }
                    projectsData.sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart));
                    console.log('Projects data:', projectsData);
                    setProjectData(projectsData);

                } else {
                    if (projectsResponse.status === 403) {
                        console.error('Unauthorized: Authentication token is invalid or expired.');
                    } else {
                        console.error(`Failed to fetch projects. Status: ${projectsResponse.status}`);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the combined function
        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts



    return(
        <>
            <Header />
            <Menu/>
            <div className="flex flex-col h-full w-full justify-center rounded-b-5xl select-none"
                 style={{...bgBigCard,...boxShadow}}>
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
                                <strong className="text-xl">{localStorage.getItem('user.name')}</strong>
                            </div>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly ">
                    <div className="w-1/5 h-full flex flex-col rounded-xl mb-32 text-white"
                         style={{...bgMeetingCard,...boxShadow}}
                    >
                        <div className="flex flex-row justify-between border-b-2 m-2 mx-10 border-orange-300">
                            <div className="flex flex-col">
                                <p>Next Meeting</p>
                                <p>Schedule</p>
                            </div>
                            <div className="flex w-11 h-11">
                                <img src={nextMeetingIcon} alt=""/>
                            </div>
                        </div>
                        {meetingData.length > 0 && (
                            <div className="flex flex-col mx-14 mb-5 ">
                                <p>{formatDate(meetingData[0].timeStart)}</p>
                                <p>{formatTime(meetingData[0].timeStart)} WITA</p>
                            </div>
                        )}
                    </div>
                    <div className="w-1/5 h-full flex flex-col rounded-xl text-white"
                         style={{...bgProjectCard,...boxShadow}}
                    >
                        <div className="flex flex-row justify-between border-b-2 m-2 mx-10 ">
                            <div className="flex flex-col ">
                                <p>Next Project</p>
                                <p>Schedule</p>
                            </div>
                            <div className="flex w-9 h-9 ">
                                <img src={nextProjectIcon} alt=""/>
                            </div>
                        </div>
                        {projectData.length > 0 &&
                            (
                            <div className="flex flex-col mx-14 mb-5 ">
                                <p>{formatDate(projectData[0].timeEnd)}</p>
                                <p>{formatTime(projectData[0].timeEnd)} WITA</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full h-full justify-stretch">
                <div className="flex flex-col w-1/2 h-full m-20">
                    <div className="flex flex-row w-full px-2 py-4 rounded-t-3xl"
                         style={headerList}
                    >
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
                    <div className="flex flex-col h-full px-7 rounded-b-3xl "
                         style={{...bgList,...boxShadow}}
                    >
                        {/*meeting dump data*/}
                        {meetingData.slice(0,5).map((meeting, index) => (
                            <div id={`meeting-list-home-${index}`}
                                 className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black"
                                 key={index}
                            >
                                <div className="flex flex-col">
                                    <div className="text-xl py-1">
                                        {meeting.topic}
                                    </div>
                                    <div className="flex w-full flex-row py-1">
                                        <div className="flex w-5 mr-3">
                                            <img src={userIcon} alt="" className="mr-3"/>
                                        </div>
                                        <div>
                                            {meeting.creator && (
                                                <p className="text-sm">{meeting.creator.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-row py-1">
                                        <div className="flex w-5 mr-3">
                                            <img src={timeIcon} alt="" className="mr-3"/>
                                        </div>
                                        <div>
                                            <p className="text-sm">{formatDate(meetingData[index].timeStart)}, {formatTime(meetingData[index].timeStart)} - {formatTime(meetingData[0].timeEnd)} WITA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center p-1 px-3 text-white rounded-lg"
                                     style={bgStatus}
                                >
                                    <p>NEW</p>
                                </div>
                            </div>
                    ))}
                        <div className="flex p-5 justify-center">
                            <Link to="/meetinglist">
                                <p>See All</p>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col w-1/2 h-full m-20">
                    <div className="flex flex-row w-full bg-orange-300 px-2 py-4 rounded-t-3xl"
                         style={headerList}>
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
                    <div className="flex flex-col bg-gray-200 h-full px-7 rounded-b-3xl"
                         style={{...bgList,...boxShadow}}>
                        {/*Project dump data*/}
                        {projectData.slice(0,5).map((project, index) => (
                            <div id={`project-list-home-${index}`}
                                 className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black"
                                 key={index}
                            >
                                <div className="flex flex-col">
                                    <div className="text-xl py-1">
                                        {project.title}
                                    </div>
                                    <div className="flex w-full flex-row py-1">
                                        <div className="flex w-5 mr-3">
                                            <img src={userIcon} alt="" className="mr-3"/>
                                        </div>
                                        <div>
                                            <p className="text-sm">

                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-row py-1">
                                        <div className="flex w-5 mr-3">
                                            <img src={timeIcon} alt="" className="mr-3"/>
                                        </div>
                                        <div>
                                            <p className="text-sm">{formatDate(projectData[index].timeStart)}, {formatTime(projectData[index].timeStart)} - {formatTime(projectData[0].timeEnd)} WITA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center p-1 px-3 text-white rounded-lg"
                                     style={bgStatus}
                                >
                                    <p>NEW</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex p-5 justify-center">
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