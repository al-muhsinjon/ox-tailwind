import { Button, Label, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleDarkMode]);
  return (
    <div>
      <Button color={'danger'}
        className=" w-[50px] h-[50px] rounded-full flex justify-center items-center bg-slate-400"
        onClick={toggleDarkMode}
      >
        {darkMode === true ? (
          <MdDarkMode className="text-stone-700 text-[25px]" />
        ) : (
          <CiLight className="text-teal-50 text-[25px] font-semibold" />
        )}
      </Button>


      <div id="select">
  {/* <div className="mb-2 block">
    <Label
      htmlFor="countries"
      value="Select your country"
    />
  </div> */}
  <Select
    id="countries"
    required={true}
  >
    <option>
      United States
    </option>
    <option>
      Canada
    </option>
    <option>
      France
    </option>
    <option>
      Germany
    </option>
  </Select>
</div>


    </div>
  );
};

export default DarkMode;
