import { Link, NavLink } from "react-router-dom";
import logo from "../../images/sheba.svg";

const Navbar = () => {
  const navlinks = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Staffs",
      link: "/staffs",
    },
    {
      page: "Login",
      link: "/login",
    },
    {
      page: "Dashboard",
      link: "/dashboard",
    },
    {
      page: "Admin",
      link: "/admin",
    },
    {
      page: "Staff",
      link: "/staff",
    },
  ];

  return (
    <div className="sticky top-0 z-10 h-20 bg-white shadow-md md:h-16">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="" />
        </Link>

        <div className="ms-auto">
          {/* {navlinks.map((navLink, index) => (
            <NavLink
              key={index}
              to={navLink.link}
              className={({ isActive }) =>
                isActive
                  ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                  : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
              }
            >
              {navLink.page}
            </NavLink>
          ))} */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/staffs"
            className={({ isActive }) =>
              isActive
                ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
            }
          >
            Staffs
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
            }
          >
            Login
          </NavLink>
          {/* <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
            }
          >
            Admin
          </NavLink>
          <NavLink
            to="/staff"
            className={({ isActive }) =>
              isActive
                ? "mx-2 rounded-md border bg-blue-400 px-3 py-1 text-white"
                : "mx-2 rounded-md border px-3 py-1 hover:bg-blue-400 hover:text-white"
            }
          >
            Staff
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
