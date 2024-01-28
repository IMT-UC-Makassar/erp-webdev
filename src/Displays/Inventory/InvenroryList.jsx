import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import AddNewInventory from "./AddNewInventory.jsx";
import {useEffect, useState} from "react";
import InventoryIcon from "../../assets/inventory-logo.png";
function InventoryList(){

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleClickNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleClickPrev = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const [inventoryData, setInventoryData] = useState([]);
    const bgBigCard = {
        backgroundColor: "#ECEAC6", // Yellow
    };

    const headerList = {
        backgroundColor: "#F2C22A", // Orange
    };

    const bgList = {
        backgroundColor: "#FFFFFF", // Light Gray
    };

    const boxShadow = {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    };


    // Assume you have the authentication token available
    const authToken = localStorage.getItem('token');
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch inventory data
                const inventoryResponse = await fetch('http://localhost:8888/api/v1/inventories', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                // Handle the response for inventory
                if (inventoryResponse.ok) {
                    const inventoryData = await inventoryResponse.json();
                    console.log('inventory data:', inventoryData);
                    setInventoryData(inventoryData);
                } else {
                    if (inventoryResponse.status === 403) {
                        console.error('Unauthorized: Authentication token is invalid or expired.');
                    } else {
                        console.error(`Failed to fetch inventory. Status: ${inventoryResponse.status}`);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the combined function
        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const [isAddInventoryModalOpen, setIsAddInventoryModalOpen] = useState(false);

    const openAddInventoryModal = () => {
        setIsAddInventoryModalOpen(true);
    };

    const closeAddInventoryModal = () => {
        setIsAddInventoryModalOpen(false);
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
                                src={InventoryIcon}
                                alt=""
                                className="w-6 h-fit"
                            />
                        </div>
                        <div>
                            <p className="text-white">Inventory</p>
                        </div>
                    </div>
                    <div className="flex flex-col h-full px-7 rounded-b-3xl mb-20"
                         style={{...bgList, ...boxShadow}}
                    >
                        <div className="flex w-full justify-start ">
                            <div className="bg-blue-500 p-2 rounded-full my-4 mx-10 text-white">
                                <button onClick={openAddInventoryModal}>Add New Inventory</button>
                            </div>
                        </div>
                        {isAddInventoryModalOpen && (
                            <div className="modal-container">
                                <AddNewInventory onClose={closeAddInventoryModal}/>
                            </div>
                        )}
                        <div className="overflow-x-auto mb-10">
                            <table className="table-auto w-full bg-white border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-blue-200">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                        Nama Barang
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                        Jumlah Barang
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300">
                                {inventoryData.slice(startIndex, endIndex).map((inventory, index) => (
                                    <tr id={`inventory-list-${index}`} className="bg-blue-100" key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{inventory.nama}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{inventory.jumlah}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div
                                className="mb-2">Showing {startIndex + 1} - {endIndex} of {inventoryData.length} inventories
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
                                    disabled={endIndex >= inventoryData.length}
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

export default InventoryList