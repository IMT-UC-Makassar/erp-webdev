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
    backgroundColor: "#F2C22A",
  };
  const bgForm = {
    backgroundColor: "#C9C9C9",
  };
  const bgInput = {
    backgroundColor: "#D9D9D9",
  };
  const bgButtonAdd = {
    backgroundColor: "#009FBC",
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
              alt="Liat Apa Anda"
              className="w-6 h-fit pt-3"
            />
            <h1 className="ml-5 flex pt-3 text-white font-semibold text-[18px]">
              New Inventory
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      <div style={bgForm} className="flex w-[1234px] rounded-b-lg">
        <form className="flex ">
          <div className="flex flex-col w-[1234px] pt-4 pl-16 pr-6 pb-14">
            <label className="font-extralight">1. Nama Barang</label>
            <input
              type="text"
              style={bgInput}
              className="m-3"
              value={namaInventory}
              onChange={(e) => setNamaInventory(e.target.value)}
            />
            <label className="font-extralight">2. jumlah Barang</label>
            <input
              type="text"
              style={bgInput}
              className="m-3"
              value={jumlahInventory}
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
