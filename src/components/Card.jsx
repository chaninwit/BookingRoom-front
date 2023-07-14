import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("/auth/findCard")
      .then((response) => {
        console.log("response", response.data);
        setCardData(response.data);
        console.log("cardData", cardData);
      })
      .catch((error) => {
        console.error(error);
        setCardData([]); // กำหนดค่า cardData เป็นแอร์เรย์ว่างเมื่อไม่พบข้อมูล
      });
  }, []);

  return (
    <div className=" mt-20 container  flex gap-6 ">
      {cardData.length ? (
        cardData.map((item) => (
          <div
            className={`${
              cardData.length === 1 ? "w-[300px] " : "item-center w-[300px]"
            }`}
            key={item.id}
          >
            <div className=" bg-base-100 shadow-xl ">
              <figure>
                <img src={item.RoomData.image} alt="Room" />
              </figure>
              <div className="card-body">
                <h2 className="card-title" key={item.id}>
                  ชื่อห้อง{item.meetingData.name}
                </h2>
                <p>รายละเอียด:{item.meetingData.details}</p>
                <p>ห้องที่:{item.meetingData.RoomId}</p>
                <p>จำนวนที่นั่ง: {item.RoomData.number_seat}</p>
                {/* <p>คงเหลือ {item.remainingSeats}</p> */}
                <p>เวลา {item.meetingData.time}</p>
                <p>เริ่มวันที่ {item.meetingData.dateStart}</p>
                <p>จบวันที่ {item.meetingData.dateEnd}</p>

                <div className="card-actions justify-end">
                  <Link to={`/Booking/${item.meetingData.id}`}>
                    <button className="btn btn-primary">เข้าร่วมเลย</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center items-center border bg-red-100 p-64 mt-10 ml-64">
          No data
        </p> // แสดงข้อความ "No data" เมื่อไม่พบข้อมูล
      )}
    </div>
  );
}
