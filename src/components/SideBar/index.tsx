import React from "react";
import { Layout } from "antd";
import "./index.css"
const SideBar = ({ menu }: { menu: any }) => {
    return (
        <Layout.Sider
            style={{ width: "100px !important" }}
            className="sidebar"
            breakpoint={"md"}
            theme="light"
            collapsedWidth={0}
            trigger={null}
            reverseArrow

        >
            {menu}
        </Layout.Sider>
    );
};
export default SideBar;