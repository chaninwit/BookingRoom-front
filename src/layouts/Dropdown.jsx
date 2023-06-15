import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { setRemoveToken } from "../utils/localstorage";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickLogout = () => {
    setRemoveToken();
    // console.log("handleClickLogout");
  };

  return (
    <div className="relative " ref={dropdownEl}>
      <div role="button" onClick={() => setOpen(!open)}>
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="user"
          className="rounded-full h-10 w-10"
        />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1 bg-white border rounded-lg shadow-lg  w-48 p-2 ">
          <Link to="/profile">
            <div className=" item-center gep-4 hover:bg-gray-100 p-2 rounded-lg">
              <div className="font-semibold">ข้อมูลผู้ใช้ของฉัน</div>
            </div>
          </Link>
          <Link to="/Mybooking">
            <div className=" item-center gep-4 hover:bg-gray-100 p-2 rounded-lg">
              <div className="font-semibold">การจองของฉัน</div>
            </div>
          </Link>
          <Link to="/Guest">
            <div className=" item-center gep-4 hover:bg-gray-100 p-2 rounded-lg">
              <div className="font-semibold" onClick={handleClickLogout}>
                ออกจากระบบ
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
