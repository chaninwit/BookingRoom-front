import Header from "../layouts/Header";
import Menuprofile from "../layouts/Menuprofile";
import { NavLink } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex">
        <Menuprofile />
        <div>
          <div className=" flex flex-row ">
            {/* left */}
            <div className="flex m-32 flex-col">
              <h1 className="text-3xl">ข้อมูลของฉัน</h1>
              <h1 className="mt-10">
                ชื่อผู้ใช้งาน
                <button className="bg-white border-solid  rounded-sx px-4 focus:ring-1 ml-5">
                  0000000000
                </button>
              </h1>
              <h1 className="mt-10">
                Username
                <button className="bg-white border-solid  rounded-sx px-4 focus:ring-1 ml-5">
                  0000000000
                </button>
              </h1>
              <h1 className="mt-10">
                Email
                <button className="bg-white border-solid  rounded-sx px-4 focus:ring-1 ml-5">
                  0000000000
                </button>
              </h1>
            </div>
            {/* rigth */}
            <div className="flex justify-self-start flex-col">
              <button className="bg-gray-400 rounded-full w-40 h-40 mx-12 mt-32 text-7xl">
                +
              </button>
              <h1 className="text-center text-3xl mt-10">เพิ่มรูป</h1>
            </div>
          </div>

          <div className=" flex  justify-center gap-20">
            <NavLink className="navlink" to="/mybooking">
              <button className="btn bg-blue-500">ตกลง</button>
            </NavLink>
            <div className="">
              <button className="btn bg-red-500">ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
