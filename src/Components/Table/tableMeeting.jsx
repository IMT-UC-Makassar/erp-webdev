import React, { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [utopik, usetTopik] = useState("");
  const [utujuan, usetTujuan] = useState("");
  const [uwaktu, usetWaktu] = useState("");
  const [utempat, usetTempat] = useState("");
  const [id, setId] = useState(""); // Atur nilai awal sesuai kebutuhan

  useEffect(() => {
    axios
      .get("http://localhost:3000/ListMeeting/")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  const handleEdit = (id) => {
    axios
      .get("http://localhost:3000/ListMeeting/" + id)
      .then((res) => {
        console.log(res.data);
        usetTopik(res.data.topik);
        usetTujuan(res.data.tujuan);
        usetWaktu(res.data.waktu);
        usetTempat(res.data.tempat);
      })
      .catch((err) => console.log(err));
    setEditId(id);
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:3000/ListMeeting/" + editId, {
        id: editId,
        topik: utopik,
        tujuan: utujuan,
        waktu: uwaktu,
        tempat: utempat,
      })
      .then((res) => {
        console.log(res);
        location.reload();
        setEditId(-1);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/ListMeeting/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="">
        <div>
          <button>
            <Link to="/meetinginput">
              input meeting
            </Link>
          </button>
        </div>
      </div>
      <table className={"mx-20 w-[1080px]"}>
        <thead className={"text-white bg-blue-700"}>
          {/* Untuk Head Table */}
          <tr>
            <th
              className={
                "w-[180px] border-r-2 border-gray-200 border-opacity-50"
              }
            >
              Topik
            </th>
            <th
              className={
                "w-[360px] border-r-2 border-gray-200 border-opacity-50"
              }
            >
              Tujuan
            </th>
            <th
              className={
                "w-[180px] border-r-2 border-gray-200 border-opacity-50"
              }
            >
              Waktu
            </th>
            <th
              className={
                "w-[180px] border-r-2 border-gray-200 border-opacity-50"
              }
            >
              Tempat
            </th>
            <th
              className={
                "w-[180px] border-r-2 border-gray-200 border-opacity-50"
              }
            >
              Action
            </th>
          </tr>
        </thead>
        {/* Untuk Body Table */}
        <tbody className={"text-center bg-gray-200 "}>
          {data.map((ListMeeting, index) =>
            ListMeeting.id === editId ? (
              <tr>
                <td>
                  <input
                    type="text"
                    value={utopik}
                    onChange={(e) => usetTopik(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={utujuan}
                    onChange={(e) => usetTujuan(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={uwaktu}
                    onChange={(e) => usetWaktu(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={utempat}
                    onChange={(e) => usetTempat(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    className="border border-black"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{ListMeeting.topik}</td>
                <td>{ListMeeting.tujuan}</td>
                <td>{ListMeeting.waktu}</td>
                <td>{ListMeeting.tempat}</td>
                <td className="">
                  <button
                    className="border border-black"
                    onClick={() => handleEdit(ListMeeting.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="border border-black"
                    onClick={() => handleDelete(ListMeeting.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
