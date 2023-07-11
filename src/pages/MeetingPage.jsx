import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import CardById from "../components/CardById";
import Menu from "../layouts/Menu";
import Header from "../layouts/Header";

export default function MeetingPage() {
  const [chairData, setChairData] = useState([]);
  const [selectedChairs, setSelectedChairs] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/auth/findAllChairById/${id}`)
      .then((response) => {
        setChairData(response.data);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChairClick = (chairId) => {
    if (selectedChairs.includes(chairId)) {
      setSelectedChairs(selectedChairs.filter((id) => id !== chairId));
    } else {
      setSelectedChairs([...selectedChairs, chairId]);
    }
  };

  const renderChairs = () => {
    return chairData.map((item) => (
      <div
        className={`flex justify-between p-3 pt-4 ${
          selectedChairs.includes(item.id) ? "bg-blue-100" : ""
        }`}
        key={item.id}
        onClick={() => handleChairClick(item.id)}
      >
        <button
          className={`rounded-sm border shadow-lg  w-10 p-2 ${
            selectedChairs.includes(item.id) ? "bg-green-500" : "bg-blue-200"
          }`}
          key={item.id}
        >
          {item.id}
        </button>
      </div>
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex">
        <Menu />

        <div className="flex-1">
          <CardById />
        </div>

        <div className="flex-1 flex-col m-10">
          <div className="mt-10 bg-white">
            <div className="flex flex-col justify-between p-5 pt-4">
              <div className="flex flex-wrap">{renderChairs()}</div>
            </div>
          </div>

          <div className="flex justify-center m-5 gap-20">
            <div>
              <NavLink to="">
                <button className="btn bg-blue-500">ตกลง</button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/">
                <button className="btn bg-red-500">ยกเลิก</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
