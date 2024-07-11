import {
  RouterProvider,
} from "react-router-dom";
import {
  createBrowserRouter,
} from "react-router-dom";
import { CreateApp } from "./page/create-app";
import { TripDetailPage } from "./page/TripDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateApp />,
  },
  {
    path: "/trip/:tripId",
    element: <TripDetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />

}

export default App
