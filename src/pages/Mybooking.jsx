import Header from "../layouts/Header";
import { NavLink } from "react-router-dom";
import Menuprofile from "../layouts/Menuprofile";
import Card from "../components/Card";

export default function MybookingPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex">
        <Menuprofile />
        <div className=" flex">
          {/* left */}
          <div className="flex-1 ">
            <Card />
          </div>
          {/* rigth */}
          <div className=" flex-1 flex-col m-10 mt-20">
            <div className="mb-20 bg-white  h-20  items-center justify-center flex">
              <div className="text-center text-lg">
                <h1>ชำระเงิน</h1>
                <p>ธนาคาารกรุงไทย เลขบัญชี 000000-00000</p>
              </div>
            </div>
            <div className="mt-20   mb-10">
              <div className="text-center text-lg">
                <div className="bg-white  h-20  items-center justify-center flex ">
                  <h1> ยืนยันใบเสร็จรับเงิน</h1>
                  <input type="file" className="ml-5" />
                </div>
              </div>
            </div>

            <div className=" flex justify-center m-5 gap-20">
              <NavLink className="navlink" to="/">
                <button className="btn bg-blue-500">ตกลง</button>
              </NavLink>
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
