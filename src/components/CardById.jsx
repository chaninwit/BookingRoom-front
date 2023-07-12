import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CardById() {
  const [cardData, setCardData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .post("/auth/findCardById", {
        id: id,
      })
      .then((response) => {
        setCardData(response.data);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="mt-20 flex">
      {cardData.length > 0 ? (
        cardData.map((item) => (
          <div className="flex-1 m-10 item-center" key={item.id}>
            <div className="bg-base-100 shadow-xl">
              <figure>
                <img src={item.RoomData.image} alt="Room" />
              </figure>
              <div className="card-body">
                <h2 className="card-title" key={item.id}>
                  ชื่อห้อง {item.meetingData.name}
                </h2>
                <p>รายละเอียด: {item.meetingData.details}</p>
                <p>ห้องที่: {item.meetingData.roomNumber}</p>
                <p>จำนวนที่นั่ง: {item.RoomData.number_seat}</p>
                {/* <p>คงเหลือ: {item.remainingSeats}</p> */}
                <p>เวลา: {item.meetingData.time}</p>
                <p>เริ่มวันที่: {item.meetingData.dateStart}</p>
                <p>จบวันที่: {item.meetingData.dateEnd}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
