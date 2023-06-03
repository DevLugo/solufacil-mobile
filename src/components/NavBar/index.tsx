import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./index.css";
import logo from "./../../logo.svg";
import { useSelector } from "react-redux";
import { selectMenu, setVisibility } from "../../store/menuSlice";
import { useAppDispatch } from "../../store";
const NavBar = ({ menu }: { menu: any }) => {
    const dispatch = useAppDispatch();
    const { visible } = useSelector(selectMenu);

    return (
        <nav className="navbar"  >
            <Button
                className="menu"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => dispatch(setVisibility(true))}
                style={{ position: "absolute", left: "1em" }}
            />
            <Drawer
                title="Topics"
                placement="left"
                open={visible}
                onClose={() => dispatch(setVisibility(false))}
            >
                {menu}
            </Drawer>

            <a href="/"><img src={logo} className="logo" alt="logo" /></a>
            <span style={{ fontWeight: "bold", paddingTop: "-20px" }}>Capital Solufacil</span>
        </nav>
    );
};
export default NavBar;