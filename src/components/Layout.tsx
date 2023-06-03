import { Link, Outlet, useNavigate } from "react-router-dom";
import { Row, Col, Layout, Breadcrumb } from "antd";
import { useLocation } from 'react-router-dom';
import logoIcon from './../images/logo_icon.png';
import { useState } from "react";
import { useAppDispatch } from "../store";
import { logoutUser } from "../store/authSlice";
import TopicMenu from "./TopicMenu";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const { Header, Sider, Content, Footer } = Layout;

const Menu = (
	<TopicMenu
		selectedKey={0}
		changeSelectedKey={() => { }}
	/>
);
export default function MyLayout() {
	const dispatch = useAppDispatch();
	const location = useLocation();
	return (
		<div className="App">
			<NavBar menu={Menu} />
			<Layout>
				<SideBar menu={Menu} />
				<Layout.Content className="content">
					<Outlet />
				</Layout.Content>
			</Layout>
		</div>
	);
}
