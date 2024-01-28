import "../../Styles/App.css";
import React, { useState } from "react";
import Meetinglogo from "../../assets/logo-meeting.png";
import {useAuth} from "../../services/authContext.jsx";
import createAxiosInstance from "../../services/axiosInstance.jsx";

function AddNewMeeting({onClose}) {
  const { isAuthenticated } = useAuth();
  const [namaMeeting, setNamaMeeting] = useState("");
  const [tujuanMeeting, setTujuanMeeting] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [selectedYearMulai, setSelectedYearMulai] = useState("Year");
  const [selectedYearAkhir, setSelectedYearAkhir] = useState("Year");
  const [selectedMonthMulai, setSelectedMonthMulai] = useState("Month");
  const [selectedMonthAkhir, setSelectedMonthAkhir] = useState("Month");
  const [selectedDayMulai, setSelectedDayMulai] = useState("Day");
  const [selectedDayAkhir, setSelectedDayAkhir] = useState("Day");
  const [selectedHourMulai, setSelectedHourMulai] = useState("Hour");
  const [selectedHourAkhir, setSelectedHourAkhir] = useState("Hour");
  const [selectedMinuteMulai, setSelectedMinuteMulai] = useState("Minute");
  const [selectedMinuteAkhir, setSelectedMinuteAkhir] = useState("Minute");
  const [lokasiMeeting, setLokasiMeeting] = useState("");

  const titlestylecolor = {
    backgroundColor: "#F2C22A",
  };
  const bgForm = {
    backgroundColor: "#C9C9C9",
  };
  const bgInput = {
    backgroundColor: "#F6F4F4",
  };
  const bgButtonAdd = {
    backgroundColor: "#009FBC",
  };

  const timestampMulai = new Date(
      selectedYearMulai,
      selectedMonthMulai - 1,
      selectedDayMulai,
      selectedHourMulai,
      selectedMinuteMulai,
  );

  const timestampStringMulaiWithOffset = timestampMulai + '.000+00:00';

  const timestampAkhir = new Date(
    selectedYearAkhir,
    selectedMonthAkhir - 1,
    selectedDayAkhir,
    selectedHourAkhir,
    selectedMinuteAkhir,
);

const timestampStringAkhirWithOffset = timestampAkhir + '.000+00:00';

  const userData = {
    email : localStorage.getItem('user.email'),
    name : localStorage.getItem('user.name'),
    department : localStorage.getItem('user.department'),
    position : localStorage.getItem('user.position')
  }

  const formData = {
    topic: namaMeeting,
    purpose: tujuanMeeting,
    timeStart: timestampMulai,
    timeEnd: timestampAkhir,
    creator: userData,
    location: lokasiMeeting,
  };
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
        !namaMeeting ||
        !tujuanMeeting ||
        selectedYearMulai === "Year" ||
        selectedYearAkhir === "Year" ||
        selectedMonthMulai === "Month" ||
        selectedMonthAkhir === "Month" ||
        selectedDayMulai === "Day" ||
        selectedDayAkhir === "Day" ||
        selectedHourMulai === "Hour" ||
        selectedHourAkhir === "Hour" ||
        selectedMinuteMulai === "Minute" ||
        selectedMinuteAkhir === "Minute" ||
        !lokasiMeeting
    ) {
      setShowErrorPopup(true);
      setTimeout(() => {
        setShowErrorPopup(false);
      }, 3000);
      return; // Don't proceed with form submission
    }

    console.log(formData);
    const axiosInstance = createAxiosInstance(isAuthenticated);

    axiosInstance.post( "/meetings", formData)
    .then((response) => {
      console.log(response);
      setShowSuccessPopup(true);
      onClose();
    }).catch((e) => {
        console.log(e);
    });
};

  const handleSelectChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="justify-center flex flex-col w-full items-center ">
      <div style={titlestylecolor} className="flex h-12 w-[1234px] rounded-t-lg ">
        <div className="flex flex-row ">
          <div className="w-19 h-fit ml-7 flex">
            <img
              src={Meetinglogo}
              alt="MeetingLogo"
              className="w-6 h-fit pt-3"
            />
            <h1 className="ml-5 flex pt-3  font-semibold text-[18px]">
              New Meeting
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex w-[1234px] rounded-b-lg bg-white">
        <form className="flex ">
          <div className="flex flex-col w-[1234px] pt-4 pl-16 pr-6 pb-14">
            <label className="font-extralight">1. Meeting Name</label>
            <input
              type="text"
              className="m-3 shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={namaMeeting}
              onChange={(e) => setNamaMeeting(e.target.value)}
              placeholder="Enter Topic"
            />
            <label className="font-extralight">2. Meeting Purpose</label>
            <input
              type="text"
              className="m-3 shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={tujuanMeeting}
              onChange={(e) => setTujuanMeeting(e.target.value)}
              placeholder="Enter Purpose"
            />
            <label className="font-extralight">3. Waktu Mulai Meeting</label>
            <div className="p-3">
              <select
                style={bgInput}
                value={selectedYearMulai}
                onChange={handleSelectChange(setSelectedYearMulai)}
                className="p-2"
              >
                <option value="">Year</option>
                {Array.from({ length: 41 }, (_, i) => 2000 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedMonthMulai}
                onChange={handleSelectChange(setSelectedMonthMulai)}
                className="p-2"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => 1 + i).map((Month) => (
                  <option key={Month} value={Month}>
                    {Month}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedDayMulai}
                onChange={handleSelectChange(setSelectedDayMulai)}
                className="p-2"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => 1 + i).map((Day) => (
                  <option key={Day} value={Day}>
                    {Day}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedHourMulai}
                onChange={handleSelectChange(setSelectedHourMulai)}
                className="p-2 ml-10"
              >
                <option value="">Hour</option>
                {Array.from({ length: 24 }, (_, Hour) => (
                  <option key={Hour} value={Hour}>
                    {Hour < 10 ? `0${Hour}` : Hour}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedMinuteMulai}
                onChange={handleSelectChange(setSelectedMinuteMulai)}
                className="p-2"
              >
                <option value="">Minute</option>
                {Array.from({ length: 61 }, (_, i) => 0 + i).map((Minute) => (
                  <option key={Minute} value={Minute}>
                    {Minute}
                  </option>
                ))}
              </select>
            </div>

            <label className="font-extralight">4. Waktu Selesai Meeting</label>
            <div className="p-3">
              <select
                style={bgInput}
                value={selectedYearAkhir}
                onChange={handleSelectChange(setSelectedYearAkhir)}
                className="p-2"
              >
                <option value="">Year</option>
                {Array.from({ length: 41 }, (_, i) => 2000 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedMonthAkhir}
                onChange={handleSelectChange(setSelectedMonthAkhir)}
                className="p-2"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => 1 + i).map((Month) => (
                  <option key={Month} value={Month}>
                    {Month}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedDayAkhir}
                onChange={handleSelectChange(setSelectedDayAkhir)}
                className="p-2"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => 1 + i).map((Day) => (
                  <option key={Day} value={Day}>
                    {Day}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedHourAkhir}
                onChange={handleSelectChange(setSelectedHourAkhir)}
                className="p-2 ml-10"
              >
                <option value="">Hour</option>
                {Array.from({ length: 24 }, (_, Hour) => (
                  <option key={Hour} value={Hour}>
                    {Hour < 10 ? `0${Hour}` : Hour}
                  </option>
                ))}
              </select>

              <select
                style={bgInput}
                value={selectedMinuteAkhir}
                onChange={handleSelectChange(setSelectedMinuteAkhir)}
                className="p-2"
              >
                <option value="">Minute</option>
                {Array.from({ length: 61 }, (_, i) => 0 + i).map((Minute) => (
                  <option key={Minute} value={Minute}>
                    {Minute}
                  </option>
                ))}
              </select>
            </div>
            <label className="font-extralight">5. Meeting Location</label>
            <input
              type="text"
              className="m-3 shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={lokasiMeeting}
              onChange={(e) => setLokasiMeeting(e.target.value)}
              placeholder="Enter Location"
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
                className="float-right text-center pt-2 pb-2 pl-8 pr-8 font-semibold rounded-full"
                style={titlestylecolor}
              >
                Cancel
              </button>
            </div>
            {showErrorPopup && (
                <div className="error-popup">
                  <p className="text-red-600"> !! Please fill in all required fields. !! </p>
                </div>
            )}
          </div>
        </form>
      </div>

      {showSuccessPopup && (
          <div className="success-popup">
            <p>Meeting added successfully!</p>
          </div>
      )}
    </div>
  );
}

export default AddNewMeeting;
