import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CardById from "../components/CardById";
import Menu from "../layouts/Menu";
import Header from "../layouts/Header";
import { toast } from "react-toastify";

export default function MeetingPage() {
  const [chairData, setChairData] = useState([]);
  const [bookedChairData, setBookedChairData] = useState({});
  const [selectedChairs, setSelectedChairs] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/auth/findAllChairById/${id}`)
      .then((response) => {
        setChairData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`/auth/findBookingById/${id}`)
      .then((response) => {
        setBookedChairData(response.data?.Chair);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, submissionStatus]);

  const handleChairClick = (chairId) => {
    if (!isSubmitting) {
      const isAlreadyBooked = bookedChairData?.ChairId?.includes(chairId);
      if (!isAlreadyBooked && !selectedChairs.includes(chairId)) {
        setSelectedChairs([...selectedChairs, chairId]);
      } else {
        setSelectedChairs(selectedChairs.filter((ss) => ss != chairId));
      }
    }
  };

  const handleSubmit = () => {
    const sortedChairs = selectedChairs.sort((a, b) => a - b);

    axios
      .put(`/auth/updateBooking`, {
        id: id,
        ChairId: { ChairId: [...sortedChairs, ...bookedChairData?.ChairId] },
      })
      .then((response) => {
        console.log("Selected chairs updated successfully");
        setSubmissionStatus(true); // Update submission status to trigger rerender
      })
      .catch((error) => {
        console.error("Failed to update selected chairs:", error);
      });

    setIsSubmitting(true); // Set isSubmitting to true when submitting

    toast.success("จองสำเร็จ");
    navigate("/");
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
          className={`rounded-sm border shadow-lg w-10 p-2 ${
            selectedChairs.includes(item.id)
              ? "bg-green-500"
              : bookedChairData?.ChairId?.includes(item.id)
              ? "bg-red-500"
              : "bg-blue-200"
          }`}
          key={item.id}
          disabled={bookedChairData?.ChairId?.includes(item.id)}
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
              <button className="btn bg-blue-500" onClick={handleSubmit}>
                ตกลง
              </button>
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
