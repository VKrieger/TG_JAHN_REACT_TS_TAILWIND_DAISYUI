import Logo from "../styles/icons/logo.svg";

export interface NavItem {
  id: number;
  text: string;
  submenu?: {
    id: number;
    text: string;
  }[];
}

export const navItems: NavItem[] = [
  { id: 1, text: "Aktuelles" },
  {
    id: 2,
    text: "Verein",
    submenu: [
      { id: 21, text: "Über Uns" },
      { id: 22, text: "Vorstand" },
      { id: 23, text: "Mitgliedschaft" },
      { id: 24, text: "Downloads" },
    ],
  },
  {
    id: 3,
    text: "Fussball",
    submenu: [
      { id: 31, text: "Bambinis" },
      { id: 32, text: "D Jugend" },
      { id: 33, text: "E Jugend" },
      { id: 34, text: "F Jugend" },
      { id: 35, text: "Alte Herren" },
    ],
  },
  {
    id: 4,
    text: "Breitensport",
    submenu: [
      { id: 41, text: "Gymnastik" },
      { id: 42, text: "Bauch Beine Po" },
      { id: 43, text: "Leichtathletik" },
      { id: 44, text: "Kinderturnen" },
    ],
  },
  { id: 5, text: "Badminton" },
  { id: 6, text: "Tischtennis" },
  { id: 7, text: "Volleyball" },
];

export { Logo };