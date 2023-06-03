import React, { useEffect, useState } from "react";
import { Menu, } from "antd";
import type { MenuProps, MenuTheme } from 'antd';
import { EnvironmentOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../store";
import { getRoutesRQ, selectRoutes, } from "../../store/routeSlice";
import { useSelector } from "react-redux";
import { logoutUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { setVisibility } from "../../store/menuSlice";

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    onClick?: () => void,
    theme?: 'light' | 'dark',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        onClick,
    } as MenuItem;
}
const TopicMenu = ({ selectedKey, changeSelectedKey }: { selectedKey: any, changeSelectedKey: any }) => {
    const { loading, routes, error } = useSelector(selectRoutes);
    const dispatch = useAppDispatch();
    const [menuitems, setMenuItems] = useState<MenuItem[]>([]);
    useEffect(() => {
        dispatch(
            getRoutesRQ({
                where: {}
            })
        )
    }, [])
    const navigate = useNavigate();

    useEffect(() => {
        const menuItemsRoutes = routes.map(route => {
            return getItem(route.name, route.id, <EnvironmentOutlined />,
                route.localities?.map(locality =>
                    getItem(locality.name, locality.id, undefined,
                        locality.leads.length ? locality.leads.map(lead =>
                            getItem(lead.personalData?.fullName, lead.id, undefined, undefined, () => {
                                navigate(`/route/${lead.id}`);
                                dispatch(setVisibility(false));
                            }
                            )) : undefined
                    )
                )
            )
        });
        const routesT = [
            getItem(
                'Rutas',
                'sub1',
                <EnvironmentOutlined />,
                menuItemsRoutes
            ),
            getItem('Gastos', '6'),
            getItem('Efectivo', '7'),
            getItem('Mi Nomina', '8'),
            getItem('Mis Prestamos', '9'),
        ];

        setMenuItems(routesT);

    }, [routes])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'calc(100% )',
        }}>
            <Menu mode="vertical" selectedKeys={[selectedKey]} items={menuitems} />
            <Menu items={["Logout"].map(menuKey => ({
                label: menuKey, key: menuKey, onClick: () => dispatch(logoutUser())
            }))} />
        </div>
    );
}
export default TopicMenu;