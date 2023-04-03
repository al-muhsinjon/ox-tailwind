import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import DarkMode from "./DarkMode";

const Navbars = () => {
  const [active, setActive] = useState("");

  const activeHandler = (id) => setActive(id);

  // const [show, setShow] = useState(true)
  return (
    <>
      <div className="shadow-md ml-[20%]">
        <Navbar fluid={false} rounded={false}>
          <Navbar.Brand href="https://flowbite.com/">
            
           
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={logo}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Use_task</span>
              
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item><DarkMode/></Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            {/* <Navbar.Toggle /> */}
          </div>
          
        </Navbar>
      </div>
    </>
  );
};

export default Navbars;
