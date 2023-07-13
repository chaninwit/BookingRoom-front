import Header from "../layouts/Header";
import Menu from "../layouts/Menu";
import ButtonModal from "../components/ButtonModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import validateMeeingForm from "../features/auth/validators/validate-inputForm";
import { getAccessToken } from "../utils/localstorage";
import MyCard from "../components/MyCard ";

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
        toast.success("สร้างMeetingสำเร็จ");
        navigate("/");
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
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex  ">
        <Menu />
        <div className="flex ">
          <MyCard />
        </div>
        <div className="m-10 w-20  justify-self-auto">
          <ButtonModal title="  Create Meeting">
            <div>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmitForm}
              >
                <div className=" flex flex-row ">
                  <div className="flex-1 m-10 item-center">
                    <div className="card-body flex gap-5">
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
                      <select name="RoomId" onChange={handleChangeInput}>
                        <option value="">เลือกห้องที่</option>
                        <option value="1">ห้องที่ 1</option>
                        <option value="2">ห้องที่ 2</option>
                      </select>

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
                    </div>
                    <div className=" flex  justify-center items-end gap-20">
                      <button
                        type="submit"
                        className="btn bg-blue-500 text-white"
                      >
                        ตกลง
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </ButtonModal>
        </div>
      </div>
    </div>
  );
}
