import { NavLink } from "react-router-dom";
export default function Menuprofile() {
  return (
    <div className=" flex h-[calc(100vh-5rem)]">
      <div className="mt-20">
        <ul className="menu p-5 w-80 h-full bg-base-300 text-base-content items-center gap-8 ">
          <li>
            <a>
              <NavLink className="navlink" to="/Profile">
                บัญชีของฉัน
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink className="navlink" to="/myBooking">
                การจองของฉัน
              </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
