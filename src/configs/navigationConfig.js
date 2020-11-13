import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "home",
    title: "Trang chủ",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "AccountManagement",
    title: "Quản lý tài khoản",
    type: "collapse",
    icon: <Icon.Box size={20} />,
    permissions: ["admin", "editor"],
    // navLink: "/page2"
    children: [
      {
        id: "common-account",
        title: "Tài khoản thường",
        type: "item",
        icon: <Icon.File size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/common-account",
      },
      {
        id: "bot-account",
        title: "Tài khoản bot",
        type: "item",
        icon: <Icon.File size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/bot-account",
      },
      {
        id: "admin-account",
        title: "Tài khoản admin",
        type: "item",
        icon: <Icon.File size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/admin-account",
      },
      {
        id: "ccu",
        title: "CCU hệ thống",
        type: "item",
        icon: <Icon.File size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/ccu",
      },
      {
        id: "money-summary",
        title: "Cộng tiền",
        type: "item",
        icon: <Icon.File size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/money-summary",
      },
    ],
  },
];

export default navigationConfig;
