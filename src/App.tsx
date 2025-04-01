import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

import Volleyball from "./pages/Volleyball/Volleyball";

import Downloads from "./pages/Verein/Downloads";
import Ueber_uns from "./pages/Verein/Ueber_uns";
import Mitgliedschaft from "./pages/Verein/Mitgliedschaft";
import Vorstand from "./pages/Verein/Vorstand";

import Tischtennis from "./pages/Tischtennis/Tischtennis";

import News from "./pages/News/News";

import HomePage from "./pages/Homepage/HomePage";

import Bambinis from "./pages/Fussball/Bambinis";
import D_Jugend from "./pages/Fussball/D_Jugend";
import E_Jugend from "./pages/Fussball/E_Jugend";
import F_Jugend from "./pages/Fussball/F_Jugend";
import Herren from "./pages/Fussball/Herren";

import Bauch_Beine_Po from "./pages/Breitensport/Bauch_Beine_Po";
import Gymnastik from "./pages/Breitensport/Gymnastik";
import Kinderturnen from "./pages/Breitensport/Kinderturnen";
import Leichtathletik from "./pages/Breitensport/Leichtathletik";

import Badminton from "./pages/Badminton/Badminton";

import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/bambinis",
          element: <Bambinis />,
        },
        {
          path: "/d_jugend",
          element: <D_Jugend />,
        },
        {
          path: "/f_jugend",
          element: <F_Jugend />,
        },
        {
          path: "/d_jugend",
          element: <D_Jugend />,
        },
        {
          path: "/e_jugend",
          element: <E_Jugend />,
        },
        {
          path: "/herren",
          element: <Herren />,
        },
        {
          path: "/bauch_beine_po",
          element: <Bauch_Beine_Po />,
        },
        {
          path: "/gymnastik",
          element: <Gymnastik />,
        },
        {
          path: "/kinderturnen",
          element: <Kinderturnen />,
        },
        {
          path: "/leichtathletik",
          element: <Leichtathletik />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/vorstand",
          element: <Vorstand />,
        },
        {
          path: "/ueber_uns",
          element: <Ueber_uns />,
        },
        {
          path: "/mitgliedschaft",
          element: <Mitgliedschaft />,
        },
        {
          path: "/downloads",
          element: <Downloads />,
        },
        {
          path: "/tischtennis",
          element: <Tischtennis />,
        },
        {
          path: "/volleyball",
          element: <Volleyball />,
        },
        {
          path: "/badminton",
          element: <Badminton />,
        },
        {
          path: "/datenschutz",
          element: <Datenschutz />,
        },
        {
          path: "/impressum",
          element: <Impressum />,
        },
        {
          path: "/:name",
          element: <HomePage />,
        },
      ],
    },
  ],
  { basename: "/TG_JAHN_REACT_TS_TAILWIND_DAISYUI" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
