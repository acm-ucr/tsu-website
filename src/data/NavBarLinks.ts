export interface navigation {
  name: string;
  link: string;
}

const navigations: navigation[] = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "board",
    link: "/board",
  },
  {
    name: "events",
    link: "/events",
  },
];

export default navigations;
