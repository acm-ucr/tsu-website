import { StaticImageData } from "next/image";
import PlaceHolder from "@/public/placeholder.webp";

export interface BoardInfo {
  image: StaticImageData;
  name: string;
  role: string;
}

const BoardMembers: BoardInfo[] = [
  {
    name: "Jasper",
    role: "President",
    image: PlaceHolder,
  },
  {
    name: "Jasper",
    role: "President",
    image: PlaceHolder,
  },
  {
    name: "Jasper",
    role: "President",
    image: PlaceHolder,
  },
  {
    name: "Jasper",
    role: "President",
    image: PlaceHolder,
  },
  {
    name: "Jasper",
    role: "President",
    image: PlaceHolder,
  },
  {
    name: "Jasper",
    role: "President",
    image: PlaceHolder,
  },
];

export default BoardMembers;
