import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="relative z-50 backdrop:px-2 bg-transparent">
      <div className="bg-white bg-opacity-10 backdrop-blur-md text-black w-full fixed top-0  py-3 ">
        <nav className=" flex justify-between items-center max-w-[1230px] mx-auto ">
          <span className="text-3xl ">
            <ShoppingBag className="inline " size="40px" /> Product Hunt
          </span>
          <ul className=" space-x-5 font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-product">add Product</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
