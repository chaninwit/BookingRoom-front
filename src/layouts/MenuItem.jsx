import { NavLink } from "react-router-dom";

export default function MenuItem() {
  return (
    <ul className="menu p-5 w-80 h-full bg-base-300 text-base-content items-center gap-8  mr-10">
      <li>
        <a>
          <NavLink className="navlink font-bold" to="/">
            HOME
          </NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink className="navlink font-bold" to="/Mymeeting">
            MY MEETING
          </NavLink>
        </a>
      </li>
    </ul>
  );
}
