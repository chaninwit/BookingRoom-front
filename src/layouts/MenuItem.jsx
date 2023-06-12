import { NavLink } from "react-router-dom";

export default function MenuItem() {
  return (
    <ul className="menu p-5 w-80 h-full bg-base-300 text-base-content items-center gap-8 ">
      {/* Sidebar content here */}

      <li>
        <a>
          <NavLink className="navlink" to="/">
            HOME
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink className="navlink" to="/Meeting">
            MEETING
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink className="navlink" to="/Booking">
            BOOKING
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink className="navlink" to="/Mymeeting">
            MY MEETING
          </NavLink>
        </a>
      </li>
    </ul>
  );
}