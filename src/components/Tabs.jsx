import { Tabs, TextInput } from "flowbite-react";
import React from "react";

const Tab = () => {
  return (
    <>
      <Tabs.Group className="" aria-label="Full width tabs" style="fullWidth">
        {/* <Tabs.Item title="Profile" />
        <Tabs.Item title="Dashboard" /> */}
        <Tabs.Item title="Settings" >

        <TextInput/>
        </Tabs.Item>
        <Tabs.Item title="Invoice" />
        <Tabs.Item title="Invoice" />
        <Tabs.Item title="Invoice" />
        <Tabs.Item title="Invoice" />
        <Tabs.Item title="Invoice" />
      </Tabs.Group>
    </>
  );
};

export default Tab;
