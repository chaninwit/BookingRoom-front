import Header from "../layouts/Header";
import { NavLink } from "react-router-dom";

export default function MybookingPage() {
  return (
    <div className="min-h-screen ">
      <Header />

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
              <ul className="menu p-5 w-80 h-full bg-base-300 text-base-content items-center gap-8 ">
                {/* Sidebar content here */}

                <li>
                  <a>
                    <NavLink className="navlink" to="/profile">
                      บัญชีของฉัน
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a>
                    <NavLink className="navlink" to="/Mybooking">
                      การจองของฉัน
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
