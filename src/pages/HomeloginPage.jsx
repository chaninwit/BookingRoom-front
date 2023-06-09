import BOOKING from "../assets/BOOKING.png";
import room1 from "../assets/room1.jpg";

export default function HomeloginPage() {
  return (
    <div className="min-h-screen ">
      <div className=" h-20">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <div className="w-28 pb-1 pt-1">
              <img className="w-full" src={BOOKING} />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <div className="flex gap-1"></div>
            <div className="flex gap-1"></div>
          </div>
        </div>
      </div>

      <div className=" flex h-[calc(100vh-5rem)]">
        <div className="  mt-10">
          <div className="drawer lg:drawer-open items-center ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                MENU
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content items-center">
                {/* Sidebar content here */}
                <li>
                  <a className="mt-4 mb-4 active">HOME</a>
                </li>
                <li>
                  <a className="mt-4 mb-4">MEETING</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 m-10 item-center">
          <div className="card w-96 bg-base-100 shadow-xl">
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
  );
}
