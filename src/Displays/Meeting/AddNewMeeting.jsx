import "../../Styles/App.css";
import React, { useState } from "react";
import Meetinglogo from "../../assets/logo-meeting.png";
import {useAuth} from "../../services/authContext.jsx";
import createAxiosInstance from "../../services/axiosInstance.jsx";

function AddNewMeeting() {
  const { isAuthenticated } = useAuth();
  const [namaMeeting, setNamaMeeting] = useState("");
  const [tujuanMeeting, setTujuanMeeting] = useState("");
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
    backgroundColor: "#D9D9D9",
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


  const formData = {
    topic: namaMeeting,
    purpose: tujuanMeeting,
    timeStart: timestampMulai,
    timeEnd: timestampAkhir,
    location: lokasiMeeting,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const axiosInstance = createAxiosInstance(isAuthenticated);

    axiosInstance.post( "/meetings", formData)
    .then((response) => {
      console.log(response);
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
            <h1 className="ml-5 flex pt-3 text-white font-semibold text-[18px]">
              New Meeting
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      <div style={bgForm} className="flex w-[1234px] rounded-b-lg">
        <form onSubmit={handleSubmit} className="flex ">
          <div className="flex flex-col w-[1234px] pt-4 pl-16 pr-6 pb-14">
            <label className="font-extralight">1. Nama Meeting</label>
            <input
              type="text"
              style={bgInput}
              className="m-3"
              value={namaMeeting}
              onChange={(e) => setNamaMeeting(e.target.value)}
            />
            <label className="font-extralight">2. Tujuan Meeting</label>
            <input
              type="text"
              style={bgInput}
              className="m-3"
              value={tujuanMeeting}
              onChange={(e) => setTujuanMeeting(e.target.value)}
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
            <label className="font-extralight">5. Tempat Meeting</label>
            <input
              type="text"
              style={bgInput}
              className="m-3"
              value={lokasiMeeting}
              onChange={(e) => setLokasiMeeting(e.target.value)}
            />
            <div className="mt-7 mr-5">
              <button
                className="float-right ml-5 text-center pt-2 pb-2 pl-8 pr-8 text-white font-semibold rounded-full"
                style={bgButtonAdd}
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewMeeting;
