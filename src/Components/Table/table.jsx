import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [data, setData] = useState([]);
  const [topik, setTopik] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [waktu, setWaktu] = useState("");
  const [tempat, setTempat] = useState("");
  const [editId, setEditId] = useState(-1);
  const [utopik, usetTopik] = useState("");
  const [utujuan, usetTujuan] = useState("");
  const [uwaktu, usetWaktu] = useState("");
  const [utempat, usetTempat] = useState("");
  const [id, setId] = useState(""); // Atur nilai awal sesuai kebutuhan

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = (data.length + 1).toString(); // Mengonversi ke string
    axios
      .post("http://localhost:3000/users/", {
        id: newId,
        topik,
        tujuan,
        waktu,
        tempat,
      })
      .then((res) => {
        location.reload();
      })
      .catch((er) => console.log(er));
  };

  const handleEdit = (id) => {
    axios
      .get("http://localhost:3000/users/" + id)
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
      .put("http://localhost:3000/users/" + editId, {
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
      .delete("http://localhost:3000/users/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="">
        <div>
        </div>
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
          {data.map((users, index) =>
            users.id === editId ? (
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
                <td>{users.topik}</td>
                <td>{users.tujuan}</td>
                <td>{users.waktu}</td>
                <td>{users.tempat}</td>
                <td className="">
                  <button
                    className="border border-black"
                    onClick={() => handleEdit(users.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="border border-black"
                    onClick={() => handleDelete(users.id)}
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
