import React, { useEffect, useState } from "react";
import axios from "axios";

function InputMeeting() {
//   const [data, setData] = useState([]);
//   const [topik, setTopik] = useState("");
//   const [tujuan, setTujuan] = useState("");
//   const [waktu, setWaktu] = useState("");
//   const [tempat, setTempat] = useState("");
//   const [id, setId] = useState(""); // Atur nilai awal sesuai kebutuhan

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/ListMeeting/")
//       .then((res) => setData(res.data))
//       .catch((er) => console.log(er));
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newId = (data.length + 1).toString(); // Mengonversi ke string
//     axios
//       .post("http://localhost:3000/ListMeeting/", {
//         id: newId,
//         topik,
//         tujuan,
//         waktu,
//         tempat,
//       })
//       .then((res) => {
//         location.reload();
//       })
//       .catch((er) => console.log(er));
//   };

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Topik"
      className="border-black border-2 w-[250px] h-5"
      onChange={(e) => setTopik(e.target.value)}
    />
    <input
      type="text"
      placeholder="Tujuan"
      className="border-black border-2 w-[250px] h-5"
      onChange={(e) => setTujuan(e.target.value)}
    />
    <input
      type="text"
      placeholder="Waktu"
      className="border-black border-2 w-[250px] h-5"
      onChange={(e) => setWaktu(e.target.value)}
    />
    <input
      type="text"
      placeholder="Tempat"
      className="border-black border-2 w-[250px] h-5"
      onChange={(e) => setTempat(e.target.value)}
    />
    <button className="border-black border-2 w-[50px] h-5">add</button>
  </form>
  );
}

export default InputMeeting;
