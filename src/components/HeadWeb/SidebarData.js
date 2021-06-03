import React from 'react'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GamepadIcon from '@material-ui/icons/Gamepad';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';

export const SidebarData= [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/Home"
    },
    {
        title: "Manage Users",
        icon: <PersonPinIcon />,
        link: "/mangeUser"
    },
    {
        title: "Manage Ranking",
        icon: <GamepadIcon />,
        link: "/mangeRanking"
    },
    {
        title: "Report Users",
        icon: <ListAltIcon />,
        link: "/Report"
    },
]

export default SidebarData
