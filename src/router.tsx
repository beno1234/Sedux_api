import { createBrowserRouter } from "react-router-dom";
import { Home } from "./sections/Home";
import { Step1 } from "./sections/Step1";
import { Step4 } from "./sections/Step4";
import { Step3 } from "./sections/Step3";
import { Step2 } from "./sections/Step2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/step/1",
    element: <Step1 />,
  },
  {
    path: "/step/2",
    element: <Step2 />,
  },
  {
    path: "/step/3",
    element: <Step3 />,
  },
  {
    path: "/step/4",
    element: <Step4 />,
  },
]);
