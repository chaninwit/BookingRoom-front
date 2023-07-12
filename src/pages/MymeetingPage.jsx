import Card from "../components/Card";
import Header from "../layouts/Header";
import Menu from "../layouts/Menu";
import ButtonModal from "../components/ButtonModal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import validateMeeingForm from "../features/auth/validators/validate-inputForm";
import { getAccessToken } from "../utils/localstorage";

const initialInput = {
  name: "",
  detail: "",
  room: "",
  timeStart: "",
  timeEnd: "",
  dateStart: "",
  dateEnd: "",
};

export default function MymeetingPage() {
  const [meetingData, setMeetingData] = useState([]);
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    const token = getAccessToken();
    axios
      .post("/auth/createMeeting", input, {
        headers: { authorization: token },
      })
      .then((response) => {
        setMeetingData(response.data);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    try {
      e.preventDefault();
      const result = validateMeeingForm(input);
      if (result) {
        return setError(result);
      }
      console.log("result", input);
      setError({});
      console.log(e);
      toast.success("สร้างMeetingสำเร็จ");
    } catch (err) {
      toast.error(err.message);
    }
    toast.success("สร้างสำเร็จ");
    navigate("/");
  };

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex  justify-between">
        <Menu />
        <div className="flex ">
          <Card />
        </div>
        <div className="m-10 w-20">
          <ButtonModal title="  Create Meeting">
            <div>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmitForm}
              >
                <div className=" flex flex-row ">
                  {/* left */}
                  <div className=" mt-5 ">
                    <div className="flex-1 m-10 item-center">
                      <div className="card-body">
                        <input
                          name="name"
                          type="text"
                          placeholder="ชื่อ"
                          onChange={handleChangeInput}
                        />
                        <input
                          name="details"
                          type="text"
                          placeholder="รายละเอียด"
                          onChange={handleChangeInput}
                        />
                        <input
                          name="roomNumber"
                          type="text"
                          placeholder="ห้องที่"
                          onChange={handleChangeInput}
                        />
                        <p>เวลา</p>
                        <input
                          name="time"
                          type="time"
                          placeholder="เวลาเริ่ม"
                          onChange={handleChangeInput}
                        />

                        <p>เริ่มวันที่</p>
                        <input
                          name="dateStart"
                          type="date"
                          placeholder="เริ่ม"
                          onChange={handleChangeInput}
                        />
                        <p>จบวันที่</p>
                        <input
                          name="dateEnd"
                          type="date"
                          placeholder="จบ"
                          onChange={handleChangeInput}
                        />
                        <p>RoomId</p>
                        <input
                          name="RoomId"
                          type="text"
                          placeholder="RoomId"
                          onChange={handleChangeInput}
                        />
                      </div>
                      <div className=" flex  justify-center items-end gap-20">
                        <button className="btn bg-blue-500 text-white">
                          ตกลง
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* rigth */}
                </div>
              </form>
            </div>
          </ButtonModal>
        </div>
      </div>
    </div>
  );
}
