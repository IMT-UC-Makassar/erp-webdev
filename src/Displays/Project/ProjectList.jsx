import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import AddNewProject from "./AddNewProject.jsx";
import {useEffect, useState} from "react";
import projectIcon from "../../assets/project-logo.png";
function ProjectList(){

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleClickNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleClickPrev = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const formatTime = (dateString) => {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
        };
        const formattedTime = new Date(dateString).toLocaleTimeString('id-ID', options);
        return formattedTime;
    };

    const [projectData, setProjectData] = useState([]);
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
                // Fetch project data
                const projectResponse = await fetch('http://localhost:8888/api/v1/project', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                // Handle the response for project
                if (projectResponse.ok) {
                    const projectData = await projectResponse.json();
                    projectData.sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart));
                    console.log('Project data:', projectData);
                    setProjectData(projectData);
                } else {
                    if (projectResponse.status === 403) {
                        console.error('Unauthorized: Authentication token is invalid or expired.');
                    } else {
                        console.error(`Failed to fetch project. Status: ${projectResponse.status}`);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the combined function
        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);

    const openAddProjectModal = () => {
        setIsAddProjectModalOpen(true);
    };

    const closeAddProjectModal = () => {
        setIsAddProjectModalOpen(false);
    };


    return(
        <>
            <Header/>
            <Menu/>
            <div className="flex flex-col h-full w-full justify-center rounded-b-5xl select-none"
                 style={{...bgBigCard, ...boxShadow}}>


                <div className="flex flex-col w-9/10 h-full mx-20">

                    <div className="flex flex-row w-full px-2 py-4 rounded-t-3xl mt-20"
                         style={headerList}
                    >
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
                    <div className="flex flex-col h-full px-7 rounded-b-3xl mb-20"
                         style={{...bgList, ...boxShadow}}
                    >
                        <div className="flex w-full justify-start ">
                            <div className="bg-blue-500 p-2 rounded-full my-4 mx-10 text-white">
                                <button onClick={openAddProjectModal}>Add New Project</button>
                            </div>
                        </div>
                        {isAddProjectModalOpen && (
                            <div className="modal-container">
                                <AddNewProject onClose={closeAddProjectModal}/>
                            </div>
                        )}
                        <div className="overflow-x-auto mb-10">
                            <table className="table-auto w-full bg-white border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-blue-200">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                        Tities
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                        Status kami Single
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                        Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                        Department
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300">
                                {projectData.slice(startIndex, endIndex).map((project, index) => (
                                    <tr id={`project-list-${index}`} className="bg-blue-100" key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{project.status}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {formatDate(project.timeStart)}, {formatTime(project.timeStart)} - {formatTime(project.timeEnd)} WITA
                                        </td>
                                        {project.department && (
                                            <td className="px-6 py-4 whitespace-nowrap">{project.department}</td>
                                        )}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div
                                className="mb-2">Showing {startIndex + 1} - {endIndex} of {projectData.length} projects
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={handleClickPrev}
                                    disabled={currentPage === 1}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleClickNext}
                                    disabled={endIndex >= projectData.length}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProjectList