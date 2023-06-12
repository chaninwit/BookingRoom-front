import room1 from "../assets/room1.jpg";
import Header from "../layouts/Header";
import Menu from "../layouts/Menu";

export default function HomeloginPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex">
        <div>
          <Menu />
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
