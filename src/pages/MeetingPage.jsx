import Header from "../layouts/Header";
import Menu from "../layouts/Menu";
import CardById from "../components/CardById";
import { NavLink } from "react-router-dom";

export default function MeetingPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex">
        <Menu />
        <div className=" flex">
          {/* left */}
          <div className="flex-1">
            <CardById />
          </div>
          {/* rigth */}
          <div className=" flex-1 flex-col m-10">
            <div className=" mt-10 bg-white ">
              <div className=" flex justify-between p-7 pt-4">
                <span className=""></span>
                <span className="">A</span>
                <span className="">B</span>
                <span className="">C</span>
                <span className="">D</span>
                <span className="">E</span>
              </div>
              <div className=" flex flex-col justify-between p-5 pt-4">
                <div className="flex justify-between p-3 pt-4 ">
                  <h1>1</h1>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"A1"}
                  </button>

                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"B1"}
                  </button>

                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"C1"}
                  </button>

                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"D1"}
                  </button>

                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"E1"}
                  </button>
                </div>
                <div className="flex justify-between p-3 pt-4">
                  <h1>2</h1>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"A2 "}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"B2"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"C2 "}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"D2"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"E2"}
                  </button>
                </div>
                <div className="flex justify-between p-3 pt-4">
                  <h1>3</h1>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"A3"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"B3"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"C3"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"D3"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"E3"}
                  </button>
                </div>
                <div className="flex justify-between p-3 pt-4">
                  <h1>4</h1>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"A4"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"B4"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"C4"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"D4"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"E4"}
                  </button>
                </div>
                <div className="flex justify-between p-3 pt-4">
                  <h1>5</h1>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"A5"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"B5"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"C5"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"D5"}
                  </button>
                  <button className="bg-blue-200 rounded-sm  border shadow-lg  w-10 p-2 ">
                    {"E5"}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white mt-10 h-20 items-center justify-center flex">
              <div className="mr-10">จองที่นั่ง.... ที่</div>
              <div className="ml-10">ราคา....บาท</div>
            </div>

            <div className=" flex justify-center m-5 gap-20">
              <div className=" ">
                <NavLink to="/Booking">
                  <button className="btn bg-blue-500">ตกลง</button>
                </NavLink>
              </div>
              <div className="">
                <button className="btn bg-red-500">ยกเลิก</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
