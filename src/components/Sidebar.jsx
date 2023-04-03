import { Label, Select, Sidebar } from "flowbite-react";
import React from "react";
import { logo } from "../assets";
import { AiOutlineMenuFold, AiOutlineShoppingCart } from "react-icons/ai";

const Sidebars = () => {
  return (
    <div className="h-[100vh]">
      <Sidebar
        rounded={false}
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className="w-auto h-auto pl-5 p-3 flex">
              <AiOutlineMenuFold size={30} color="grey" />
              <img width={100} src={logo} alt="" />
            </div>
            <Sidebar.Item
              href="#"
              icon={AiOutlineShoppingCart}
            >
              <span className="md:block hidden">Dashboard</span>
            </Sidebar.Item>
            <Sidebar.Collapse
              icon={AiOutlineShoppingCart}
              label="E-commerce"
            >
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item
              href="#"
              icon={AiOutlineShoppingCart}
            >
              <span className="md:block hidden">IconBox</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={AiOutlineShoppingCart}
            >
              <span className="md:block hidden">Users</span>
              
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={AiOutlineShoppingCart}
            >
              <span className="md:block hidden">Products</span>
              
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={AiOutlineShoppingCart}
            >
              <span className="md:block hidden">Sign In</span>
              
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              //   icon={HiTable}
            >
              <span className="md:block hidden">Sign Up</span>
              
            </Sidebar.Item>

            <div id="select">
              {/* <div className="mb-2 block">
    <Label
      htmlFor="countries"
      value="Select your country"
    />
  </div> */}
              <Select id="countries" required={true}>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Sidebars;
