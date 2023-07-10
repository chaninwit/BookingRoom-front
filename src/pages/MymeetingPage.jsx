import Card from "../components/Card";
import Header from "../layouts/Header";
import Menu from "../layouts/Menu";
import ButtonModal from "../components/ButtonModal";

export default function MymeetingPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex  justify-between">
        <Menu />
        <div className="flex ">
          <Card />
        </div>
        <div className="m-10 w-20">
          <ButtonModal title="  Create Meeting">
            <div>
              <div className=" flex flex-row ">
                {/* left */}
                <div className=" mt-5 ">
                  <div className="flex-1 m-10 item-center">
                    <figure>
                      <input type="file" className="h-10" />
                    </figure>
                    <div className="card-body">
                      <input type="text" placeholder="ชื่อ" />
                      <input type="text" placeholder="รายละเอียด" />
                      <input type="text" placeholder="ห้องที่" />
                      <input type="text" placeholder="จำนวนที่นั่ง" />
                      <input type="text" placeholder="คงเหลือ" />
                      <p>เวลา</p>
                      <input type="time" placeholder="เวลา" />
                      <p>เริ่มวันที่</p>
                      <input type="date" placeholder="เริ่ม" />
                      <p>จบวันที่</p>
                      <input type="date" placeholder="เริ่ม" />
                    </div>
                    <div className=" flex  justify-center items-end gap-20">
                      <button className="btn bg-blue-500 text-white">
                        ตกลง
                      </button>
                    </div>
                  </div>
                </div>
                {/* rigth */}
              </div>
            </div>
          </ButtonModal>
        </div>
      </div>
    </div>
  );
}
