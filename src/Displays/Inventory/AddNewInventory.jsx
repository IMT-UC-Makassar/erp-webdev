import "../../Styles/App.css";
import React, { useState } from "react";
import InventoryLogo from "../../assets/inventory-logo.png";
import { useAuth } from "../../services/authContext.jsx";
import createAxiosInstance from "../../services/axiosInstance.jsx";

function AddNewInventory({ onClose }) {
  const { isAuthenticated } = useAuth();
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [namaInventory, setNamaInventory] = useState("");
  const [jumlahInventory, setJumlahInventory] = useState("");

  const titlestylecolor = {
    backgroundColor: "#ffce32",
  };


  const bgButtonAdd = {
    backgroundColor: "#1d63ff",
  };

  const formData = {
    nama: namaInventory,
    jumlah: jumlahInventory,
  };
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !namaInventory ||
      !jumlahInventory 
    ) {
      setShowErrorPopup(true);
      setTimeout(() => {
        setShowErrorPopup(false);
      }, 3000);
      return; // Don't proceed with form submission
    }

    console.log(formData);
    const axiosInstance = createAxiosInstance(isAuthenticated);

    axiosInstance
      .post("/inventories", formData)
      .then((response) => {
        console.log(response);
        setShowSuccessPopup(true);
        onClose();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="justify-center flex flex-col w-full items-center ">
      <div
        style={titlestylecolor}
        className="flex h-12 w-[1234px] rounded-t-lg "
      >
        <div className="flex flex-row ">
          <div className="w-19 h-fit ml-7 flex">
            <img
              src={InventoryLogo}
              alt="Liat Apa Anda.. jawab: liat anjing"
              className="w-6 h-fit pt-3"
            />
            <h1 className="ml-5 flex pt-3  font-semibold text-[18px]">
              New Inventory
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      <div  className="flex w-[1234px] rounded-b-lg bg-white">
        <form className="flex ">
          <div className="flex flex-col w-[1234px] pt-4 pl-16 pr-6 pb-14">
            <label className="font-extralight">1. Name of Items</label>
            <input
              type="text"
              className="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={namaInventory}
              onChange={(e) => setNamaInventory(e.target.value)}
              placeholder="Enter Items"
            />
            <label className="font-extralight">2. Amount of Items</label>
            <input
              type="number"
              className="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jumlahInventory}
              placeholder="Enter nominal"
              onChange={(e) => setJumlahInventory(e.target.value)}
            />
            <div className="mt-7 mr-5">
              <button
                className="float-right ml-5 text-center pt-2 pb-2 pl-8 pr-8 text-white font-semibold rounded-full"
                style={bgButtonAdd}
                onClick={handleSubmit}
              >
                Add
              </button>

              <button
                className="float-right text-center pt-2 pb-2 pl-8 pr-8 text-white font-semibold rounded-full"
                style={titlestylecolor}
              >
                Cancel
              </button>
            </div>
            {showErrorPopup && (
              <div className="error-popup">
                <p className="text-red-600">
                  {" "}
                  !! Please fill in all required fields. !!{" "}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>

      {showSuccessPopup && (
        <div className="success-popup">
          <p>Item successfully!</p>
        </div>
      )}
    </div>
  );
}

export default AddNewInventory;
