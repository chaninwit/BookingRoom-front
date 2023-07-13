import { Link } from "react-router-dom";
import BOOKING from "../assets/BOOKING.png";
import Dropdown from "./Dropdown";
export default function Header() {
  return (
    <div className=" h-20">
      <div className="navbar bg-base-100 justify-between">
        <div className="grip-2">
          <Link to="/">
            <img className="w-24 h-20" src={BOOKING} />
          </Link>
        </div>

        <div className="justify-self-end self-center">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
