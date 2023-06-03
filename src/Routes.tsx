import {
	Navigate
} from "react-router-dom";
import Login from "./pages/Login";
import type { RouteObject } from "react-router-dom";
import { useSelector } from "react-redux";
import LeadLoans from "./pages/LeadLoans";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MyLayout from "./components/Layout";
import { selectMe } from "./store/authSlice";
import Dashboard from "./pages/Dashboard";
const topics = ["First topic", "Second topic", "Third topic"];

const routes: RouteObject[] = [
	{
		children: [
			{
				path: "/",
				element: <PublicRoute><Login /></PublicRoute>
			}
		]
	},
	{
		element: <PrivateRoute><MyLayout /></PrivateRoute>,
		children: [
			{ path: "/route/:leadId", element: <LeadLoans /> },
			{ path: "/dashboard", element: <Dashboard /> },
		]
	},
];


function PrivateRoute({ children }: { children: any }) {
	const { user } = useSelector(selectMe)
	console.log("PrivateRoute", user)
	return user ? children : <Navigate to="/" />;
}

function PublicRoute({ children }: { children: any }) {
	const { user } = useSelector(selectMe)
	console.log("PublicRoute", user)
	return !user ? children : <Navigate to="/dashboard" />;
}

export default routes;
