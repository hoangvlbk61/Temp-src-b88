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
    id: "ccv-8",
    title: "CCV 8",
    type: "item",
    icon: <Icon.Aperture size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/ccv8",
  }
];

export default navigationConfig;
