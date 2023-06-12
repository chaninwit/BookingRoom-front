import { Link, NavLink } from "react-router-dom";
import room1 from "../assets/room1.jpg";
import BOOKING from "../assets/BOOKING.png";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";

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
      <div className="flex">
        <div>
          <div className=" flex h-[calc(100vh-5rem)]">
            <div className="mt-20">
              <ul className="menu p-5 w-80 h-full bg-base-300 text-base-content items-center gap-8 ">
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
              </ul>
            </div>
          </div>
        </div>

        <div className=" mt-10 ">
          <div className="flex-1 m-10 item-center">
            <div className="card  bg-base-100 shadow-xl">
              <figure>
                <img src={room1} alt="Room" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">งานดื่มชา</h2>
                <p>รายละเอียด : ดื่มด่ำกับเรื่องชา</p>
                <p>ห้องที่ 1</p>
                <p>จำนวนที่นั่ง 20</p>
                <p>คงเหลือ 5</p>
                <p>เวลา 20:50 - 22:00 น.</p>
                <p>เริ่มวันที่ 01/07/2566</p>
                <p>จบวันที่ 01/07/2566</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">เข้าร่วมเลย</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10 ">
          <div className="flex-1 m-10 item-center">
            <div className="card  bg-base-100 shadow-xl">
              <figure>
                <img src={room1} alt="Room" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">งานดื่มชา</h2>
                <p>รายละเอียด : ดื่มด่ำกับเรื่องชา</p>
                <p>ห้องที่ 1</p>
                <p>จำนวนที่นั่ง 20</p>
                <p>คงเหลือ 5</p>
                <p>เวลา 20:50 - 22:00 น.</p>
                <p>เริ่มวันที่ 01/07/2566</p>
                <p>จบวันที่ 01/07/2566</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">เข้าร่วมเลย</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
