import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getAccessToken } from "../utils/localstorage";

export default function MyCard() {
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();
    axios
      .get("/auth/findMeetingById", {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log("response", response.data);
        setCardData(response.data);
        console.log("cardData", cardData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOnDelete = (meetingId) => {
    const token = getAccessToken();
    console.log("meetingId", meetingId);
    axios
      .delete(`/auth/deleteMeeting/${meetingId}`, {
        headers: { authorization: token },
      })
      .then(() => {
        console.log("Meeting deleted successfully");
        toast.success("ลบสำเร็จ");
        navigate("/");
      })

      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className=" mt-10 flex w-1/2 h-1/2">
      {cardData.length &&
        cardData.map((item) => (
          <div className="flex-1 m-10 item-center" key={item.id}>
            <div className=" bg-base-100 shadow-xl">
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
                  <button
                    className="btn bg-red-500 text-white"
                    onClick={() => handleOnDelete(item.meetingData.id)}
                  >
                    ลบ
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
