import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import AddNewMeeting from "./AddNewMeeting.jsx";
import {useEffect, useState} from "react";
import meetingIcon from "../../assets/meeting-logo.png";
import userIcon from "../../assets/user.png";
import timeIcon from "../../assets/time.png";
function MeetingList(){

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

    const [meetingData, setMeetingData] = useState([]);
    const bgBigCard = {
        backgroundColor: "#ECEAC6", // Yellow
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


    // Assume you have the authentication token available
    const authToken = localStorage.getItem('token');
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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the combined function
        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const [isAddMeetingModalOpen, setIsAddMeetingModalOpen] = useState(false);

    const openAddMeetingModal = () => {
        setIsAddMeetingModalOpen(true);
    };

    const closeAddMeetingModal = () => {
        setIsAddMeetingModalOpen(false);
    };


    return(
        <>
            <Header/>
            <Menu/>
            <div className="flex flex-col h-full w-full justify-center rounded-b-5xl select-none"
                 style={{...bgBigCard, ...boxShadow}}>
                <div className="flex w-full justify-start ">
                    <div className="bg-blue-500 p-2 rounded-full my-4 mx-32 text-white">
                        <button onClick={openAddMeetingModal}>Add New Meeting</button>
                    </div>
                </div>
                {isAddMeetingModalOpen && (
                    <div className="modal-container">
                        <AddNewMeeting onClose={closeAddMeetingModal} />
                    </div>
                )}

                <div className="flex flex-col w-9/10 h-full mx-20">
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
                    <div className="flex flex-col h-full px-7 rounded-b-3xl mb-20"
                         style={{...bgList, ...boxShadow}}
                    >
                        {/*meeting dump data*/}
                        {meetingData.slice(0, 100).map((meeting, index) => (
                            <div id={`meeting-list-home-${index}`}
                                 className="flex flex-row justify-between w-full p-5 items-center border-b-2 border-black"
                                 key={index}
                            >
                                <div className="flex flex-col">
                                    <strong className="text-xl py-1">
                                        {meeting.topic}
                                    </strong>
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

                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MeetingList