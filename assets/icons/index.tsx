import React from "react";
import { theme } from "../../constants/theme";
import ArrowLeft from "./arrow-left";
import Call from "./call";
import Camera from "./camera";
import Comment from "./comment";
import Delete from "./delete";
import Edit from "./edit";
import Heart from "./heart";
import Home from "./home";
import Image from "./image";
import Location from "./location";
import Lock from "./lock";
import Logout from "./logout";
import Mail from "./mail";
import Plus from "./plus-icon";
import Search from "./search";
import Send from "./send";
import Share from "./share";
import ThreeDotsCircle from "./three-dots-circle";
import ThreeDotsHorizontal from "./three-dots-horizontal";
import User from "./user";
import Video from "./video";

const icons = {
  home: Home,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  search: Search,
  location: Location,
  call: Call,
  camera: Camera,
  edit: Edit,
  arrowLeft: ArrowLeft,
  threeDotsCircle: ThreeDotsCircle,
  threeDotsHorizontal: ThreeDotsHorizontal,
  comment: Comment,
  share: Share,
  send: Send,
  delete: Delete,
  logout: Logout,
  image: Image,
  video: Video,
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  strokeWidth = 1.9,
  color = theme.color.textLight,
  ...props
}) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={size}
      width={size}
      strokeWidth={strokeWidth}
      color={color}
      {...props}
    />
  );
};

export default Icon;
