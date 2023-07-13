import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
import BOOKING from "../assets/BOOKING.png";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <div className=" h-20">
        <div className="navbar bg-base-100 justify-between">
          <div className="grip-2">
            <Link to="/">
              <img className="w-24 h-20" src={BOOKING} />
            </Link>
          </div>
          <div className="grip-2 ">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="justify-self-end self-center">
            <div>
              <LoginForm />
            </div>
            <div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div>
          <div className=" flex h-[calc(100vh-5rem)]">
            <div className="mt-20">
              <ul className="menu p-5 w-80 h-full bg-base-300 text-base-content items-center gap-8 ">
                <li>
                  <NavLink className="navlink" to="/">
                    HOME
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Card />
        </div>
      </div>
    </div>
  );
}
