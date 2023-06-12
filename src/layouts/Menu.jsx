import MenuItem from "./MenuItem";

export default function Menu() {
  return (
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
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
}
